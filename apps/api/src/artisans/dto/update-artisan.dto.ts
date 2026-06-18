import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateArtisanDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  businessName?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  categories?: string[];

  @IsString()
  @IsOptional()
  logoUrl?: string;

  @IsString()
  @IsOptional()
  websiteUrl?: string;
}
