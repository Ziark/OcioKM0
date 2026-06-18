import { Module } from '@nestjs/common';
import { TownHallsController } from './town-halls.controller';
import { TownHallsService } from './town-halls.service';

@Module({
  controllers: [TownHallsController],
  providers: [TownHallsService],
})
export class TownHallsModule {}
