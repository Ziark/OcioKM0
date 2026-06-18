import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';
import { AlertType } from '../../generated/prisma';

export class CreateAlertDto {
  @IsEnum(AlertType)
  type: AlertType;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  message: string;

  @IsInt()
  @IsOptional()
  @Min(1)
  @Max(5)
  severity?: number;
}
