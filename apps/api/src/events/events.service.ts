import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { AttendeeStatus, EventStatus, Prisma } from '../generated/prisma';
import { PrismaService } from '../common/prisma.service';
import type { CreateEventDto } from './dto/create-event.dto';
import type { UpdateEventDto } from './dto/update-event.dto';
import type { ListEventsDto } from './dto/list-events.dto';
import type { UpsertVenueMapDto } from './dto/upsert-venue-map.dto';
import type { RsvpDto } from './dto/rsvp.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async list(dto: ListEventsDto) {
    const page = dto.page ?? 1;
    const limit = Math.min(dto.limit ?? 20, 100);

    const where: Prisma.EventWhereInput = {
      status: { in: [EventStatus.PUBLISHED, EventStatus.ACTIVE] },
      ...(dto.category && { categories: { has: dto.category } }),
      ...(dto.from && { startDate: { gte: new Date(dto.from) } }),
      ...(dto.to && { endDate: { lte: new Date(dto.to) } }),
      ...(dto.townHallId && { townHallId: dto.townHallId }),
    };

    const [total, data] = await this.prisma.$transaction([
      this.prisma.event.count({ where }),
      this.prisma.event.findMany({
        where,
        orderBy: { startDate: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
        include: {
          townHall: { select: { name: true, municipality: true } },
          _count: { select: { participants: true, attendees: true } },
        },
      }),
    ]);

    return { data, total, page, limit };
  }

  async findOne(id: string) {
    const event = await this.prisma.event.findUnique({
      where: { id },
      include: {
        townHall: { select: { id: true, name: true, municipality: true, province: true } },
        venueMap: true,
        _count: { select: { participants: true, attendees: true } },
      },
    });
    if (!event) throw new NotFoundException('Event not found');
    return event;
  }

  async create(userId: string, dto: CreateEventDto) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException('Town hall profile not found');

    return this.prisma.event.create({
      data: {
        townHallId: townHall.id,
        title: dto.title,
        description: dto.description,
        startDate: new Date(dto.startDate),
        endDate: new Date(dto.endDate),
        locationLat: dto.locationLat,
        locationLng: dto.locationLng,
        locationAddr: dto.locationAddr,
        categories: dto.categories ?? [],
        ...(dto.maxAttendees !== undefined && { maxAttendees: dto.maxAttendees }),
        ...(dto.coverImageUrl !== undefined && { coverImageUrl: dto.coverImageUrl }),
      },
    });
  }

  async update(userId: string, eventId: string, dto: UpdateEventDto) {
    await this.assertOwnership(userId, eventId);

    return this.prisma.event.update({
      where: { id: eventId },
      data: {
        ...(dto.title !== undefined && { title: dto.title }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.startDate !== undefined && { startDate: new Date(dto.startDate) }),
        ...(dto.endDate !== undefined && { endDate: new Date(dto.endDate) }),
        ...(dto.locationLat !== undefined && { locationLat: dto.locationLat }),
        ...(dto.locationLng !== undefined && { locationLng: dto.locationLng }),
        ...(dto.locationAddr !== undefined && { locationAddr: dto.locationAddr }),
        ...(dto.categories !== undefined && { categories: dto.categories }),
        ...(dto.maxAttendees !== undefined && { maxAttendees: dto.maxAttendees }),
        ...(dto.coverImageUrl !== undefined && { coverImageUrl: dto.coverImageUrl }),
      },
    });
  }

  async publish(userId: string, eventId: string) {
    const { event } = await this.assertOwnership(userId, eventId);
    if (event.status !== EventStatus.DRAFT) {
      throw new BadRequestException('Only DRAFT events can be published');
    }
    return this.prisma.event.update({
      where: { id: eventId },
      data: { status: EventStatus.PUBLISHED },
    });
  }

  async cancel(userId: string, eventId: string) {
    const { event } = await this.assertOwnership(userId, eventId);
    if (event.status === EventStatus.CANCELLED) {
      throw new BadRequestException('Event is already cancelled');
    }
    return this.prisma.event.update({
      where: { id: eventId },
      data: { status: EventStatus.CANCELLED },
    });
  }

  async getVenueMap(eventId: string) {
    await this.findOne(eventId);
    const map = await this.prisma.venueMap.findUnique({ where: { eventId } });
    if (!map) throw new NotFoundException('Venue map not found');
    return map;
  }

  async upsertVenueMap(userId: string, eventId: string, dto: UpsertVenueMapDto) {
    await this.assertOwnership(userId, eventId);
    const zones = (dto.zones ?? []) as Prisma.InputJsonValue;

    return this.prisma.venueMap.upsert({
      where: { eventId },
      create: { eventId, imageUrl: dto.imageUrl, widthPx: dto.widthPx, heightPx: dto.heightPx, zones },
      update: {
        imageUrl: dto.imageUrl,
        widthPx: dto.widthPx,
        heightPx: dto.heightPx,
        ...(dto.zones !== undefined && { zones }),
      },
    });
  }

  async rsvp(userId: string, eventId: string, dto: RsvpDto) {
    const event = await this.findOne(eventId);
    if (
      event.status !== EventStatus.PUBLISHED &&
      event.status !== EventStatus.ACTIVE
    ) {
      throw new BadRequestException('Event is not open for RSVPs');
    }
    return this.prisma.eventAttendee.upsert({
      where: { eventId_userId: { eventId, userId } },
      create: { eventId, userId, status: dto.status },
      update: { status: dto.status },
    });
  }

  async getMyRsvp(userId: string, eventId: string) {
    const attendee = await this.prisma.eventAttendee.findUnique({
      where: { eventId_userId: { eventId, userId } },
    });
    if (!attendee) throw new NotFoundException('No RSVP found');
    return attendee;
  }

  async cancelRsvp(userId: string, eventId: string) {
    const attendee = await this.prisma.eventAttendee.findUnique({
      where: { eventId_userId: { eventId, userId } },
    });
    if (!attendee) throw new NotFoundException('No RSVP to cancel');
    return this.prisma.eventAttendee.delete({
      where: { eventId_userId: { eventId, userId } },
    });
  }

  private async assertOwnership(userId: string, eventId: string) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event || event.townHallId !== townHall.id) throw new ForbiddenException();
    return { townHall, event };
  }
}
