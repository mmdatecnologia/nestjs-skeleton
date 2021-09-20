import { AppModule } from '@/app/app.module';
import { apiConfig } from '@/config/api.config';
import { loggerConfig } from '@/config/logger.config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { WinstonModule } from 'nest-winston';

require('dotenv-flow').config();

// disable tls certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: WinstonModule.createLogger(loggerConfig),
  });

  const logger = new Logger('bootstrap');

  await app.listen(apiConfig.serverPort);

  logger.log(`API on ${apiConfig.serverUrl}:${apiConfig.serverPort}/`);
}
bootstrap();
