import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Device } from './schemas/device.schema';
import { Model } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class DevicesService {
  constructor(@InjectModel(Device.name) private deviceModel: Model<Device>) {}

  async create(data: Partial<Device>, userId: string): Promise<Device> {
    const device = new this.deviceModel({
      ...data,
      uuid: uuidv4(),
      createdBy: userId,
    });
    return device.save();
  }

  async findByUser(userId: string): Promise<Device[]> {
    return this.deviceModel.find({ createdBy: userId }).exec();
  }

  async findById(id: string): Promise<Device | null> {
    return this.deviceModel.findById(id).exec();
  }

  async update(id: string, data: Partial<Device>) {
    return this.deviceModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async decommission(id: string, userId: string, details?: string) {
    return this.deviceModel.findByIdAndUpdate(
      id,
      {
        status: 'decommissioned',
        decommissionedOn: new Date(),
        decommissionedBy: userId,
        decommissionDetails: details,
      },
      { new: true },
    ).exec();
  }
}
