import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { ComplianceService } from '../compliance/compliance.service';
// import your compliance JSON, benchmark data, etc.

async function seed() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const complianceService = app.get(ComplianceService);

  // Example: Insert compliance controls from JSON
  // const controls = require('./controls.json');
  // for (const ctrl of controls) {
  //   await complianceService.complianceControlModel.create(ctrl);
  // }

  // TODO: Seed benchmarks, admin user, device types, etc.

  await app.close();
}

seed();
