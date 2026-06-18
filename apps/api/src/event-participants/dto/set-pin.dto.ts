import { IsNumber, Max, Min } from 'class-validator';

export class SetPinDto {
  @IsNumber()
  @Min(0)
  @Max(100)
  positionX: number;

  @IsNumber()
  @Min(0)
  @Max(100)
  positionY: number;
}
