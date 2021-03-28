import { Connection, getConnection } from 'typeorm';
import { TestingModule } from '@nestjs/testing/testing-module';
import identity from 'lodash/identity';
import { INestApplication } from '@nestjs/common';

export async function runDatabaseDependentTest(
  app: TestingModule,
  connectionName: string,
  cb: (connection: Connection) => Promise<void>
) {
  await app.init();
  const connection = (() => {
    try {
      return getConnection(connectionName);
    } catch (e) {
      return null;
    }
  })();

  if (!connection) {
    await app.close();
    throw new Error('There must be a valid connection');
  }

  const error = await cb(connection)
    .then(() => null)
    .catch(identity);
  await connection.dropDatabase();
  await app.close();
  await connection.close();

  if (error) {
    throw error;
  }
}

export async function runDatabaseDependentExternalTest(
  app: TestingModule,
  connection: Connection | null,
  cb: (nestApplication: INestApplication) => Promise<void>
) {
  if (!connection) {
    throw new Error('There must be a valid connection');
  }
  const nestApplication = app.createNestApplication();
  await nestApplication.init();
  const error = await cb(nestApplication)
    .then(() => null)
    .catch(identity);
  await connection.dropDatabase();
  await nestApplication.close();
  if (error) {
    throw error;
  }
}
