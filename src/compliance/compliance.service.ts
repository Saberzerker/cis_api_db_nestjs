import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ComplianceControl } from './schemas/compliance-control.schema';
import { DeviceComplianceCheck } from './schemas/device-compliance-check.schema';
import { SavedConfiguration } from './schemas/saved-configuration.schema';
import { Model, Types } from 'mongoose';
import { SaveConfigurationDto } from './dto/save-configuration.dto';
import { ComplianceCheckDto } from './dto/compliance-check.dto';

@Injectable()
export class ComplianceService {
  constructor(
    @InjectModel(ComplianceControl.name)
    private complianceControlModel: Model<ComplianceControl>,
    @InjectModel(DeviceComplianceCheck.name)
    private deviceCheckModel: Model<DeviceComplianceCheck>,
    @InjectModel(SavedConfiguration.name)
    private savedConfigModel: Model<SavedConfiguration>,
  ) {}

  async getControlsByDeviceType(deviceType: string) {
    return this.complianceControlModel
      .find({ deviceType })
      .sort({ controlId: 1 })
      .exec();
  }

  async saveDeviceCheck(dto: ComplianceCheckDto, userId: string) {
    const { deviceId, controlId, status } = dto;
    const existingCheck = await this.deviceCheckModel.findOne({
      deviceId: new Types.ObjectId(deviceId),
      controlId,
    });

    if (existingCheck) {
      existingCheck.status = status;
      existingCheck.checkedBy = new Types.ObjectId(userId);
      existingCheck.checkedAt = new Date();
      return existingCheck.save();
    }

    const newCheck = new this.deviceCheckModel({
      deviceId: new Types.ObjectId(deviceId),
      controlId,
      status,
      checkedBy: new Types.ObjectId(userId),
      checkedAt: new Date(),
    });

    return newCheck.save();
  }

  async saveConfiguration(saveConfigDto: SaveConfigurationDto, userId: string) {
    const configuration = new this.savedConfigModel({
      ...saveConfigDto,
      userId: new Types.ObjectId(userId),
      deviceId: new Types.ObjectId(saveConfigDto.deviceId),
      savedAt: new Date(),
    });

    // Save individual checks
    for (const check of saveConfigDto.checks) {
      await this.saveDeviceCheck(check, userId);
    }

    return configuration.save();
  }

  async getUserConfigurations(userId: string) {
    return this.savedConfigModel
      .find({ userId: new Types.ObjectId(userId) })
      .populate('deviceId')
      .sort({ savedAt: -1 })
      .exec();
  }
}
