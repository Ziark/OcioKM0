import { IsArray, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpsertVenueMapDto {
  @IsString()
  @IsNotEmpty()
  imageUrl: string;

  @IsInt()
  widthPx: number;

  @IsInt()
  heightPx: number;

  @IsArray()
  @IsOptional()
  zones?: unknown[];
}
