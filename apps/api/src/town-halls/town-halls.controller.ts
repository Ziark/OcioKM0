import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { TownHallsService } from './town-halls.service';
import { UpdateTownHallDto } from './dto/update-town-hall.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../generated/prisma';
import type { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('town-halls')
export class TownHallsController {
  constructor(private townHallsService: TownHallsService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  getMe(@CurrentUser() user: JwtPayload) {
    return this.townHallsService.getMe(user.sub);
  }

  @Patch('me')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  updateMe(@CurrentUser() user: JwtPayload, @Body() dto: UpdateTownHallDto) {
    return this.townHallsService.updateMe(user.sub, dto);
  }

  @Get('me/events')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  listMyEvents(
    @CurrentUser() user: JwtPayload,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.townHallsService.listMyEvents(
      user.sub,
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }

  @Get('me/artisans')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  listMyArtisans(@CurrentUser() user: JwtPayload) {
    return this.townHallsService.listArtisans(user.sub);
  }

  @Post('me/artisans/:artisanId/km0')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  certifyKm0(
    @CurrentUser() user: JwtPayload,
    @Param('artisanId') artisanId: string,
  ) {
    return this.townHallsService.verifyKm0(user.sub, artisanId, true);
  }

  @Patch('me/artisans/:artisanId/km0/revoke')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.TOWN_HALL)
  revokeKm0(
    @CurrentUser() user: JwtPayload,
    @Param('artisanId') artisanId: string,
  ) {
    return this.townHallsService.verifyKm0(user.sub, artisanId, false);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.townHallsService.findOne(id);
  }

  @Get(':id/events')
  listEvents(
    @Param('id') id: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    return this.townHallsService.listEvents(
      id,
      page ? parseInt(page, 10) : 1,
      limit ? parseInt(limit, 10) : 20,
    );
  }
}
