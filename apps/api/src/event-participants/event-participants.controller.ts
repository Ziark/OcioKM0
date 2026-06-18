import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EventParticipantsService } from './event-participants.service';
import { ApplyDto } from './dto/apply.dto';
import { ReviewParticipantDto } from './dto/review-participant.dto';
import { SetPinDto } from './dto/set-pin.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../generated/prisma';
import type { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('events/:eventId/participants')
export class EventParticipantsController {
  constructor(private participantsService: EventParticipantsService) {}

  @Get()
  list(@Param('eventId') eventId: string) {
    return this.participantsService.list(eventId);
  }

  @Get('all')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  listAll(@CurrentUser() user: JwtPayload, @Param('eventId') eventId: string) {
    return this.participantsService.listAll(user.sub, eventId);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ARTISAN)
  apply(
    @CurrentUser() user: JwtPayload,
    @Param('eventId') eventId: string,
    @Body() dto: ApplyDto,
  ) {
    return this.participantsService.apply(user.sub, eventId, dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  review(
    @CurrentUser() user: JwtPayload,
    @Param('eventId') eventId: string,
    @Param('id') id: string,
    @Body() dto: ReviewParticipantDto,
  ) {
    return this.participantsService.review(user.sub, eventId, id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ARTISAN)
  withdraw(
    @CurrentUser() user: JwtPayload,
    @Param('eventId') eventId: string,
    @Param('id') id: string,
  ) {
    return this.participantsService.withdraw(user.sub, eventId, id);
  }

  @Patch(':id/pin')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ARTISAN)
  setPin(
    @CurrentUser() user: JwtPayload,
    @Param('eventId') eventId: string,
    @Param('id') id: string,
    @Body() dto: SetPinDto,
  ) {
    return this.participantsService.setPin(user.sub, eventId, id, dto);
  }
}
