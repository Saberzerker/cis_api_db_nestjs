import { IsString, IsNotEmpty, IsArray, ValidateNested, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ComplianceCheckDto } from './compliance-check.dto';

export class SaveConfigurationDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ComplianceCheckDto)
  checks: ComplianceCheckDto[];

  @IsString()
  @IsOptional()
  comments?: string;
}
