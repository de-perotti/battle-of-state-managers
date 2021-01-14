import { Connection } from 'typeorm';
import { TestingModule } from '@nestjs/testing/testing-module';
import identity from 'lodash/identity';
import { cleanDatabase } from './database';

export async function runDatabaseDependentTest(
  app: TestingModule,
  connection: Connection,
  cb: (connection: Connection) => Promise<void>
) {
  await app.init();
  await cleanDatabase(connection);
  const error = await cb(connection)
    .then(() => null)
    .catch(identity);
  await connection.dropDatabase();
  await app.close();
  if (error) {
    throw error;
  }
}
