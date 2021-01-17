import { Connection } from 'typeorm';
import { TestingModule } from '@nestjs/testing/testing-module';
import identity from 'lodash/identity';
import { cleanDatabase } from './database';
import { INestApplication } from '@nestjs/common';

export async function runDatabaseDependentTest(
  app: TestingModule,
  connection: Connection | null,
  cb: () => Promise<void>
) {
  await app.init();
  if (connection) {
    await cleanDatabase(connection);
  }
  const error = await cb()
    .then(() => null)
    .catch(identity);
  if (connection) {
    await connection.dropDatabase();
  }
  await app.close();
  if (error) {
    throw error;
  }
}

export async function runDatabaseDependentExternalTest(
  app: TestingModule,
  connection: Connection | null,
  cb: (nestApplication: INestApplication) => Promise<void>
) {
  const nestApplication = app.createNestApplication();
  await nestApplication.init();
  if (connection) {
    await cleanDatabase(connection);
  }
  const error = await cb(nestApplication)
    .then(() => null)
    .catch(identity);
  if (connection) {
    await connection.dropDatabase();
  }
  await nestApplication.close();
  if (error) {
    throw error;
  }
}
