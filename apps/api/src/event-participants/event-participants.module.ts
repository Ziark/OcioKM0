import { Module } from '@nestjs/common';
import { EventParticipantsController } from './event-participants.controller';
import { EventParticipantsService } from './event-participants.service';

@Module({
  controllers: [EventParticipantsController],
  providers: [EventParticipantsService],
})
export class EventParticipantsModule {}
