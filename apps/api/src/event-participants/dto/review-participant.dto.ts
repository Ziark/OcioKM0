import { IsEnum, IsOptional, IsString } from 'class-validator';
import { ParticipantStatus } from '../../generated/prisma';

export class ReviewParticipantDto {
  @IsEnum([ParticipantStatus.APPROVED, ParticipantStatus.REJECTED])
  status: ParticipantStatus;

  @IsString()
  @IsOptional()
  boothCode?: string;
}
