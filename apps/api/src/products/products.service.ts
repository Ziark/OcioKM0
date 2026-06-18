import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../common/prisma.service';
import type { CreateProductDto } from './dto/create-product.dto';
import type { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async list(participantId: string) {
    const participant = await this.prisma.eventParticipant.findUnique({
      where: { id: participantId },
    });
    if (!participant) throw new NotFoundException('Participant not found');
    return this.prisma.eventProduct.findMany({
      where: { participantId },
      orderBy: { name: 'asc' },
    });
  }

  async create(userId: string, participantId: string, dto: CreateProductDto) {
    await this.assertOwnership(userId, participantId);
    return this.prisma.eventProduct.create({
      data: { participantId, ...dto },
    });
  }

  async update(userId: string, productId: string, dto: UpdateProductDto) {
    const product = await this.prisma.eventProduct.findUnique({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Product not found');
    await this.assertOwnership(userId, product.participantId);
    return this.prisma.eventProduct.update({ where: { id: productId }, data: dto });
  }

  async remove(userId: string, productId: string) {
    const product = await this.prisma.eventProduct.findUnique({
      where: { id: productId },
    });
    if (!product) throw new NotFoundException('Product not found');
    await this.assertOwnership(userId, product.participantId);
    return this.prisma.eventProduct.delete({ where: { id: productId } });
  }

  private async assertOwnership(userId: string, participantId: string) {
    const artisan = await this.prisma.artisan.findUnique({ where: { userId } });
    if (!artisan) throw new ForbiddenException();
    const participant = await this.prisma.eventParticipant.findUnique({
      where: { id: participantId },
    });
    if (!participant || participant.artisanId !== artisan.id) {
      throw new ForbiddenException();
    }
  }
}
