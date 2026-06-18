import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { EventStatus, ParticipantStatus } from '../generated/prisma';
import { PrismaService } from '../common/prisma.service';
import type { ApplyDto } from './dto/apply.dto';
import type { ReviewParticipantDto } from './dto/review-participant.dto';
import type { SetPinDto } from './dto/set-pin.dto';

@Injectable()
export class EventParticipantsService {
  constructor(private prisma: PrismaService) {}

  async list(eventId: string) {
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');

    return this.prisma.eventParticipant.findMany({
      where: { eventId, status: ParticipantStatus.APPROVED },
      orderBy: { boothCode: 'asc' },
      include: {
        artisan: {
          select: {
            id: true,
            businessName: true,
            categories: true,
            km0Certified: true,
            description: true,
          },
        },
        products: true,
      },
    });
  }

  async apply(userId: string, eventId: string, dto: ApplyDto) {
    const artisan = await this.prisma.artisan.findUnique({ where: { userId } });
    if (!artisan) throw new ForbiddenException('Artisan profile not found');

    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');
    if (event.status !== EventStatus.PUBLISHED) {
      throw new BadRequestException('Event is not accepting applications');
    }

    const existing = await this.prisma.eventParticipant.findUnique({
      where: { eventId_artisanId: { eventId, artisanId: artisan.id } },
    });
    if (existing) throw new ConflictException('Already applied to this event');

    return this.prisma.eventParticipant.create({
      data: { eventId, artisanId: artisan.id, status: ParticipantStatus.PENDING },
    });
  }

  async review(
    userId: string,
    eventId: string,
    participantId: string,
    dto: ReviewParticipantDto,
  ) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();

    const participant = await this.prisma.eventParticipant.findUnique({
      where: { id: participantId },
      include: { event: true },
    });
    if (
      !participant ||
      participant.eventId !== eventId ||
      participant.event.townHallId !== townHall.id
    ) {
      throw new ForbiddenException();
    }

    return this.prisma.eventParticipant.update({
      where: { id: participantId },
      data: {
        status: dto.status,
        ...(dto.boothCode !== undefined && { boothCode: dto.boothCode }),
      },
    });
  }

  async withdraw(userId: string, eventId: string, participantId: string) {
    const artisan = await this.prisma.artisan.findUnique({ where: { userId } });
    if (!artisan) throw new ForbiddenException();

    const participant = await this.prisma.eventParticipant.findUnique({
      where: { id: participantId },
    });
    if (
      !participant ||
      participant.eventId !== eventId ||
      participant.artisanId !== artisan.id
    ) {
      throw new ForbiddenException();
    }

    return this.prisma.eventParticipant.delete({ where: { id: participantId } });
  }

  async setPin(
    userId: string,
    eventId: string,
    participantId: string,
    dto: SetPinDto,
  ) {
    const artisan = await this.prisma.artisan.findUnique({ where: { userId } });
    if (!artisan) throw new ForbiddenException();

    const participant = await this.prisma.eventParticipant.findUnique({
      where: { id: participantId },
    });
    if (
      !participant ||
      participant.eventId !== eventId ||
      participant.artisanId !== artisan.id
    ) {
      throw new ForbiddenException();
    }
    if (participant.status !== ParticipantStatus.APPROVED) {
      throw new BadRequestException('Participation must be APPROVED to place a pin');
    }

    return this.prisma.eventParticipant.update({
      where: { id: participantId },
      data: { positionX: dto.positionX, positionY: dto.positionY },
    });
  }

  async listAll(userId: string, eventId: string) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();

    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event || event.townHallId !== townHall.id) throw new ForbiddenException();

    return this.prisma.eventParticipant.findMany({
      where: { eventId },
      orderBy: { createdAt: 'asc' },
      include: {
        artisan: { select: { id: true, businessName: true, km0Certified: true } },
      },
    });
  }
}
