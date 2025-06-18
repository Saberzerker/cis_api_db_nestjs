import { Controller, Get, Post, Body, UseGuards, Req, Query } from '@nestjs/common';
import { ComplianceService } from './compliance.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { SaveConfigurationDto } from './dto/save-configuration.dto';
import { ComplianceCheckDto } from './dto/compliance-check.dto';

@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @UseGuards(JwtAuthGuard)
  @Get('controls')
  async getControls(@Query('deviceType') deviceType: string) {
    return this.complianceService.getControlsByDeviceType(deviceType);
  }

  @UseGuards(JwtAuthGuard)
  @Post('device-check')
  async saveDeviceCheck(@Body() dto: ComplianceCheckDto, @Req() req) {
    return this.complianceService.saveDeviceCheck(dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Post('save-configuration')
  async saveConfiguration(@Body() dto: SaveConfigurationDto, @Req() req) {
    return this.complianceService.saveConfiguration(dto, req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('saved-configurations')
  async getUserConfigurations(@Req() req) {
    return this.complianceService.getUserConfigurations(req.user.userId);
  }
}
