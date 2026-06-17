import { IsEmail, IsEnum, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { Role } from '../../../generated/prisma';

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsString()
  @IsNotEmpty()
  displayName: string;

  @IsEnum([Role.USER, Role.ARTISAN, Role.TOWN_HALL])
  role: Role;
}
