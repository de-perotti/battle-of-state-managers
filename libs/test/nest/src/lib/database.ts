import { Connection } from 'typeorm';
import cp from 'child_process';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export async function createDump(connection: Connection): Promise<void> {
  const connectionConfig = connection.driver.options as TypeOrmModuleOptions;

  if (connectionConfig.type !== 'postgres') {
    throw new Error('Only postgres is supported at the moment');
  }

  await connection.runMigrations({ transaction: 'each' });
}

export async function loadDump(
  templateDatabase: string,
  connectionConfig: TypeOrmModuleOptions
) {
  if (connectionConfig.type !== 'postgres') {
    throw new Error('Only postgres is supported at the moment');
  }

  cp.execSync(
    [
      `PGPASSWORD="${connectionConfig.password}"`,
      'createdb',
      '--host',
      connectionConfig.host,
      '--port',
      connectionConfig.port,
      '--username',
      connectionConfig.username,
      '--template',
      templateDatabase,
      '--no-password',
      connectionConfig.database,
    ].join(' ')
  );
}
