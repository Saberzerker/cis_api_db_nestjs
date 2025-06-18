import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Report } from './schemas/report.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class ReportsService {
  constructor(@InjectModel(Report.name) private reportModel: Model<Report>) {}

  async create(data: Partial<Report>): Promise<Report> {
    return new this.reportModel(data).save();
  }

  async findByUser(userId: string): Promise<Report[]> {
    return this.reportModel.find({ userId: new Types.ObjectId(userId) }).exec();
  }

  async findById(id: string): Promise<Report> {
    const report = await this.reportModel.findById(id).exec();
    if (!report) throw new NotFoundException('Report not found');
    return report;
  }

  async findAll(): Promise<Report[]> {
    return this.reportModel.find().exec();
  }
}
