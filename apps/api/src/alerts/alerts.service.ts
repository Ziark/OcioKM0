import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { AttendeeStatus, Prisma } from '../../generated/prisma';
import { PrismaService } from '../common/prisma.service';
import { RealtimeGateway } from '../realtime/realtime.gateway';
import type { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class AlertsService {
  constructor(
    private prisma: PrismaService,
    private gateway: RealtimeGateway,
  ) {}

  async create(userId: string, eventId: string, dto: CreateAlertDto) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();

    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event || event.townHallId !== townHall.id) throw new ForbiddenException();

    const alert = await this.prisma.alert.create({
      data: {
        eventId,
        townHallId: townHall.id,
        type: dto.type,
        title: dto.title,
        message: dto.message,
        severity: dto.severity ?? 1,
      },
    });

    const attendees = await this.prisma.eventAttendee.findMany({
      where: {
        eventId,
        status: { in: [AttendeeStatus.GOING, AttendeeStatus.INTERESTED] },
      },
      select: { userId: true },
    });

    if (attendees.length > 0) {
      await this.prisma.notification.createMany({
        data: attendees.map(({ userId: recipientId }) => ({
          recipientId,
          type: `ALERT_${alert.type}`,
          title: alert.title,
          body: alert.message,
          data: { alertId: alert.id, eventId } as Prisma.InputJsonValue,
        })),
      });
    }

    this.gateway.broadcastAlert(eventId, {
      id: alert.id,
      type: alert.type,
      title: alert.title,
      message: alert.message,
      severity: alert.severity,
      eventId,
      createdAt: alert.createdAt,
    });

    return alert;
  }

  async listForEvent(eventId: string) {
    const event = await this.prisma.event.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');
    return this.prisma.alert.findMany({
      where: { eventId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
