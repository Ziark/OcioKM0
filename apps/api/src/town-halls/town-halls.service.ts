import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { EventStatus } from '../generated/prisma';
import { PrismaService } from '../common/prisma.service';
import type { UpdateTownHallDto } from './dto/update-town-hall.dto';

@Injectable()
export class TownHallsService {
  constructor(private prisma: PrismaService) {}

  async getMe(userId: string) {
    const townHall = await this.prisma.townHall.findUnique({
      where: { userId },
      include: { user: { select: { email: true, createdAt: true } } },
    });
    if (!townHall) throw new NotFoundException('Town hall profile not found');
    return townHall;
  }

  async updateMe(userId: string, dto: UpdateTownHallDto) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new NotFoundException('Town hall profile not found');
    return this.prisma.townHall.update({ where: { userId }, data: dto });
  }

  async findOne(id: string) {
    const townHall = await this.prisma.townHall.findUnique({ where: { id } });
    if (!townHall) throw new NotFoundException('Town hall not found');
    return townHall;
  }

  async listEvents(id: string, page = 1, limit = 20) {
    const townHall = await this.prisma.townHall.findUnique({ where: { id } });
    if (!townHall) throw new NotFoundException('Town hall not found');

    const safeLimit = Math.min(limit, 100);
    const where = { townHallId: id, status: { not: EventStatus.DRAFT } } as const;

    const [total, data] = await this.prisma.$transaction([
      this.prisma.event.count({ where }),
      this.prisma.event.findMany({
        where,
        orderBy: { startDate: 'desc' },
        skip: (page - 1) * safeLimit,
        take: safeLimit,
        include: { _count: { select: { participants: true, attendees: true } } },
      }),
    ]);

    return { data, total, page, limit: safeLimit };
  }

  async listArtisans(userId: string) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();
    return this.prisma.artisan.findMany({
      where: { verifiedById: townHall.id },
      include: { user: { select: { email: true } } },
    });
  }

  async verifyKm0(userId: string, artisanId: string, certified: boolean) {
    const townHall = await this.prisma.townHall.findUnique({ where: { userId } });
    if (!townHall) throw new ForbiddenException();
    const artisan = await this.prisma.artisan.findUnique({ where: { id: artisanId } });
    if (!artisan) throw new NotFoundException('Artisan not found');
    return this.prisma.artisan.update({
      where: { id: artisanId },
      data: {
        km0Certified: certified,
        verifiedById: certified ? townHall.id : null,
      },
    });
  }
}
