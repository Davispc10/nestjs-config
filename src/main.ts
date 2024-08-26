import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { swaggerConfig } from './shared/docs/swagger-config';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  swaggerConfig(app);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<number>('PORT');
  await app.listen(port || 3000);
  const logger = new Logger('Main');
  logger.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
