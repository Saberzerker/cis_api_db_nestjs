import { Controller, Get, Post, Body, Param, UseGuards, Req, UploadedFile, UseInterceptors, Res } from '@nestjs/common';
import { BenchmarksService } from './benchmarks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { Response } from 'express';

@Controller('benchmarks')
export class BenchmarksController {
  constructor(private readonly benchmarksService: BenchmarksService) {}

  @Get()
  async getAll() {
    return this.benchmarksService.findAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.benchmarksService.findById(id);
  }

  // Add endpoints for file download as needed
}
