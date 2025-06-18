import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateDeviceDto {
  @IsString()
  @IsNotEmpty()
  type: string;

  @IsString()
  @IsNotEmpty()
  deviceSubtype: string;

  @IsString()
  @IsNotEmpty()
  ipAddress: string;

  @IsString()
  @IsNotEmpty()
  machineName: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsNotEmpty()
  ownerName: string;

  @IsString()
  @IsNotEmpty()
  ownerPhone: string;

  @IsEmail()
  @IsNotEmpty()
  ownerEmail: string;
}
