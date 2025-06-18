import { Controller, Post, Body, UseGuards, Req, Get, Param, Patch } from '@nestjs/common';
import { DevicesService } from './devices.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateDeviceDto } from './dto/create-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() dto: CreateDeviceDto, @Req() req) {
    return this.devicesService.create(dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findByUser(@Req() req) {
    return this.devicesService.findByUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.devicesService.findById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/decommission')
  async decommission(@Param('id') id: string, @Req() req, @Body('details') details: string) {
    return this.devicesService.decommission(id, req.user.userId, details);
  }
}
