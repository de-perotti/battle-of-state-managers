import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

void (async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = app.get<Logger>(Logger);
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    logger.log('Listening at http://localhost:' + port + '/');
  });
})();
