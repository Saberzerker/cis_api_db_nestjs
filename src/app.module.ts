import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { BenchmarksModule } from './benchmarks/benchmarks.module';
import { ComplianceModule } from './compliance/compliance.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
        dbName: config.get<string>('DATABASE_NAME'),
      }),
    }),
    ThrottlerModule.forRoot({ ttl: 60, limit: 100 }),
    AuthModule,
    UsersModule,
    DevicesModule,
    BenchmarksModule,
    ComplianceModule,
    ReportsModule,
  ],
})
export class AppModule {}
