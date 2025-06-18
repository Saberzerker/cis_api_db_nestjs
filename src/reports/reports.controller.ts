import { Controller, Get, Post, Body, Param, UseGuards, Req } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() data: any, @Req() req) {
    return this.reportsService.create({ ...data, userId: req.user.userId, generatedAt: new Date() });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByUser(@Req() req) {
    return this.reportsService.findByUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.reportsService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get('all')
  async findAll() {
    return this.reportsService.findAll();
  }
}
