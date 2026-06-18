import { Body, Controller, Get, Param, Patch, Query, UseGuards } from '@nestjs/common';
import { ArtisansService } from './artisans.service';
import { ListArtisansDto } from './dto/list-artisans.dto';
import { UpdateArtisanDto } from './dto/update-artisan.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Role } from '../../generated/prisma';
import type { JwtPayload } from '../auth/strategies/jwt.strategy';

@Controller('artisans')
export class ArtisansController {
  constructor(private artisansService: ArtisansService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ARTISAN)
  getMe(@CurrentUser() user: JwtPayload) {
    return this.artisansService.getMe(user.sub);
  }

  @Patch('me')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ARTISAN)
  updateMe(@CurrentUser() user: JwtPayload, @Body() dto: UpdateArtisanDto) {
    return this.artisansService.updateMe(user.sub, dto);
  }

  @Get()
  list(@Query() dto: ListArtisansDto) {
    return this.artisansService.list(dto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.artisansService.findOne(id);
  }
}
