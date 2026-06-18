import { IsEnum } from 'class-validator';
import { AttendeeStatus } from '../../generated/prisma';

export class RsvpDto {
  @IsEnum([AttendeeStatus.GOING, AttendeeStatus.INTERESTED])
  status: AttendeeStatus;
}
