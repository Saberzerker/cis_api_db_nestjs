import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Benchmark } from './schemas/benchmark.schema';
import { Model } from 'mongoose';

@Injectable()
export class BenchmarksService {
  constructor(@InjectModel(Benchmark.name) private benchmarkModel: Model<Benchmark>) {}

  async create(data: Partial<Benchmark>): Promise<Benchmark> {
    return new this.benchmarkModel(data).save();
  }

  async findAll(): Promise<Benchmark[]> {
    return this.benchmarkModel.find().sort({ dateUpdated: -1 }).exec();
  }

  async findById(id: string): Promise<Benchmark> {
    const benchmark = await this.benchmarkModel.findById(id).exec();
    if (!benchmark) throw new NotFoundException('Benchmark not found');
    return benchmark;
  }

  async update(id: string, data: Partial<Benchmark>): Promise<Benchmark> {
    return this.benchmarkModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    await this.benchmarkModel.findByIdAndDelete(id);
    return { deleted: true };
  }
}
