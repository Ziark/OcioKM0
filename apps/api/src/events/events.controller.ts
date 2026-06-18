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
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ListEventsDto } from './dto/list-events.dto';
import { UpsertVenueMapDto } from './dto/upsert-venue-map.dto';
import { RsvpDto } from './dto/rsvp.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../generated/prisma';
import type { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Get()
  list(@Query() dto: ListEventsDto) {
    return this.eventsService.list(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  create(@CurrentUser() user: JwtPayload, @Body() dto: CreateEventDto) {
    return this.eventsService.create(user.sub, dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  update(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() dto: UpdateEventDto,
  ) {
    return this.eventsService.update(user.sub, id, dto);
  }

  @Patch(':id/publish')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  publish(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.eventsService.publish(user.sub, id);
  }

  @Patch(':id/cancel')
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  cancel(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.eventsService.cancel(user.sub, id);
  }

  @Get(':id/map')
  getVenueMap(@Param('id') id: string) {
    return this.eventsService.getVenueMap(id);
  }

  @Put(':id/map')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  upsertVenueMap(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() dto: UpsertVenueMapDto,
  ) {
    return this.eventsService.upsertVenueMap(user.sub, id, dto);
  }

  @Post(':id/attendees')
  @UseGuards(JwtAuthGuard)
  rsvp(
    @CurrentUser() user: JwtPayload,
    @Param('id') id: string,
    @Body() dto: RsvpDto,
  ) {
    return this.eventsService.rsvp(user.sub, id, dto);
  }

  @Get(':id/attendees/me')
  @UseGuards(JwtAuthGuard)
  getMyRsvp(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.eventsService.getMyRsvp(user.sub, id);
  }

  @Delete(':id/attendees/me')
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtAuthGuard)
  cancelRsvp(@CurrentUser() user: JwtPayload, @Param('id') id: string) {
    return this.eventsService.cancelRsvp(user.sub, id);
  }
}
