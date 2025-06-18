import { IsString, IsNotEmpty } from 'class-validator';

export class ComplianceCheckDto {
  @IsString()
  @IsNotEmpty()
  deviceId: string;

  @IsString()
  @IsNotEmpty()
  controlId: string;

  @IsString()
  @IsNotEmpty()
  status: string; // checked, crossed, skipped, empty
}
