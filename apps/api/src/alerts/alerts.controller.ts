import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { CreateAlertDto } from './dto/create-alert.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../generated/prisma';
import type { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('events/:eventId/alerts')
export class AlertsController {
  constructor(private alertsService: AlertsService) {}

  @Get()
  listForEvent(@Param('eventId') eventId: string) {
    return this.alertsService.listForEvent(eventId);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  create(
    @CurrentUser() user: JwtPayload,
    @Param('eventId') eventId: string,
    @Body() dto: CreateAlertDto,
  ) {
    return this.alertsService.create(user.sub, eventId, dto);
  }
}
