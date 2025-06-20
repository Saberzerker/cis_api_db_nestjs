import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(helmet());
  app.enableCors({
    origin: [configService.get('FRONTEND_URL') || 'http://localhost:5173'],
    credentials: true,
  });

  await app.listen(configService.get('PORT') || 3001);
  console.log(`Backend running at http://localhost:${configService.get('PORT') || 3001}`);
}
bootstrap();
