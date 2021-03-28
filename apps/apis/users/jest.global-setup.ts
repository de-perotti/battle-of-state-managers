import { NestFactory } from '@nestjs/core';
import { ApiModule } from './src/core/database/sources/api/api.module';
import { createDump } from '../../../libs/test/nest/src';
import { getConnection } from 'typeorm';
import { ConnectionConfigProvider } from './src/core/database/sources/api/connection/connection-config.provider';

module.exports = async () => {
  const app = await NestFactory.createApplicationContext(ApiModule.register());
  await app.init();
  const connectionConfig = app.get<ConnectionConfigProvider>(
    ConnectionConfigProvider
  );
  const connection = getConnection(connectionConfig.config.name);
  await createDump(connection);
  await app.close();
  await connection.close();
};
