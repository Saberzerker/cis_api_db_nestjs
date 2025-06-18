import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ComplianceService } from './compliance.service';
import { ComplianceController } from './compliance.controller';
import { ComplianceControl, ComplianceControlSchema } from './schemas/compliance-control.schema';
import { DeviceComplianceCheck, DeviceComplianceCheckSchema } from './schemas/device-compliance-check.schema';
import { SavedConfiguration, SavedConfigurationSchema } from './schemas/saved-configuration.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ComplianceControl.name, schema: ComplianceControlSchema },
      { name: DeviceComplianceCheck.name, schema: DeviceComplianceCheckSchema },
      { name: SavedConfiguration.name, schema: SavedConfigurationSchema },
    ])
  ],
  providers: [ComplianceService],
  controllers: [ComplianceController],
  exports: [ComplianceService],
})
export class ComplianceModule {}
