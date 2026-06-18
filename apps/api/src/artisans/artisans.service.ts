import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, ParticipantStatus } from '../../generated/prisma';
import { PrismaService } from '../common/prisma.service';
import type { ListArtisansDto } from './dto/list-artisans.dto';
import type { UpdateArtisanDto } from './dto/update-artisan.dto';

@Injectable()
export class ArtisansService {
  constructor(private prisma: PrismaService) {}

  async list(dto: ListArtisansDto) {
    const page = dto.page ?? 1;
    const limit = Math.min(dto.limit ?? 20, 100);

    const where: Prisma.ArtisanWhereInput = {
      ...(dto.km0Only === true && { km0Certified: true }),
      ...(dto.category && { categories: { has: dto.category } }),
      ...(dto.search && {
        businessName: { contains: dto.search, mode: Prisma.QueryMode.insensitive },
      }),
    };

    const [total, data] = await this.prisma.$transaction([
      this.prisma.artisan.count({ where }),
      this.prisma.artisan.findMany({
        where,
        orderBy: { businessName: 'asc' },
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          businessName: true,
          description: true,
          categories: true,
          km0Certified: true,
          logoUrl: true,
          websiteUrl: true,
          _count: { select: { followers: true } },
        },
      }),
    ]);

    return { data, total, page, limit };
  }

  async findOne(id: string) {
    const artisan = await this.prisma.artisan.findUnique({
      where: { id },
      include: {
        participants: {
          where: { status: ParticipantStatus.APPROVED },
          orderBy: { createdAt: 'desc' },
          take: 5,
          include: {
            event: {
              select: {
                id: true,
                title: true,
                startDate: true,
                endDate: true,
                status: true,
                locationAddr: true,
              },
            },
          },
        },
        _count: { select: { followers: true, participants: true } },
      },
    });
    if (!artisan) throw new NotFoundException('Artisan not found');
    return artisan;
  }

  async getMe(userId: string) {
    const artisan = await this.prisma.artisan.findUnique({
      where: { userId },
      include: { user: { select: { email: true } } },
    });
    if (!artisan) throw new NotFoundException('Artisan profile not found');
    return artisan;
  }

  async updateMe(userId: string, dto: UpdateArtisanDto) {
    const artisan = await this.prisma.artisan.findUnique({ where: { userId } });
    if (!artisan) throw new ForbiddenException('Artisan profile not found');
    return this.prisma.artisan.update({ where: { userId }, data: dto });
  }
}
