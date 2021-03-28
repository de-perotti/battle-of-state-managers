import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from '../ormconfig.json';
import { ClientConfig, PoolConfig } from 'pg';
import merge from 'lodash/merge';

export type ConnectionConfig = TypeOrmModuleOptions;

export const connectionConfig = ({
  connectionName,
  databaseName,
}: {
  connectionName: string;
  databaseName?: string;
}) => {
  if (!connectionName) {
    throw new Error('connection name must be defined ad not empty');
  }

  return registerAs('api-db-connection', () =>
    merge(
      config,
      {
        name: connectionName,
        migrationsRun: Boolean(
          process.env.DB_API_RUN_MIGRATION &&
            process.env.DB_API_RUN_MIGRATION === 'true'
        ),
        keepConnectionAlive: Boolean(
          process.env.DB_API_KEEP_CONNECTION_ALIVE &&
            process.env.DB_API_KEEP_CONNECTION_ALIVE === 'true'
        ),
        port: process.env.DB_API_PORT,
      } as Partial<ConnectionConfig>,
      {
        host: process.env.DB_API_HOST || undefined,
        database: process.env.DB_API_NAME || undefined,
        username: process.env.DB_API_USER || undefined,
        password: process.env.DB_API_PASSWORD || undefined,
        logging: process.env.DB_API_LOGGING || undefined,
      } as Partial<ConnectionConfig>,
      {
        database: databaseName || undefined,
      } as Partial<ConnectionConfig>,
      {
        // statement_timeout: 2_000,
        // connectionTimeoutMillis: 2_000,
        // query_timeout: 2_000,
        // idle_in_transaction_session_timeout: 2_000,
      } as ClientConfig,
      {
        extra: {
          _reference: 'https://node-postgres.com/api/pool',
          // max: 20,
          // idleTimeoutMillis: 2_000,
        } as PoolConfig,
      }
    )
  );
};
