import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTownHallDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  municipality?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  province?: string;
}
