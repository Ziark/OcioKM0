import {
  IsArray,
  IsDateString,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsNumber()
  @Min(-90)
  @Max(90)
  @IsOptional()
  locationLat?: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  @IsOptional()
  locationLng?: number;

  @IsString()
  @IsNotEmpty()
  locationAddr: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  categories?: string[];

  @IsInt()
  @IsOptional()
  @Min(1)
  maxAttendees?: number;

  @IsString()
  @IsOptional()
  coverImageUrl?: string;
}
