import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { AppConfig } from './app.config';

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get<Logger>(Logger);
  const config = app.get<ConfigService>(ConfigService);
  const port = config.get<AppConfig['port']>('app.port');
  await app.listen(port, () => {
    logger.log('Listening at http://localhost:' + port + '/');
  });
})();
