import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BenchmarksService } from './benchmarks.service';
import { BenchmarksController } from './benchmarks.controller';
import { Benchmark, BenchmarkSchema } from './schemas/benchmark.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Benchmark.name, schema: BenchmarkSchema }])
  ],
  providers: [BenchmarksService],
  controllers: [BenchmarksController],
  exports: [BenchmarksService],
})
export class BenchmarksModule {}
