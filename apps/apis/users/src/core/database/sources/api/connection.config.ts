import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from './ormconfig.json';
import merge from 'lodash/merge';

export type ConnectionConfig = TypeOrmModuleOptions;

export const connectionConfig = registerAs('api-db-connection', () =>
  merge(config, {
    migrationsRun: Boolean(
      process.env.DB_API_RUN_MIGRATION &&
        process.env.DB_API_RUN_MIGRATION === 'true'
    ),
    port: process.env.DB_API_PORT,
    host: process.env.DB_API_HOST || undefined,
    database: process.env.DB_API_NAME || undefined,
    username: process.env.DB_API_USER || undefined,
    password: process.env.DB_API_PASSWORD || undefined,
    logging: process.env.DB_API_LOGGING || undefined,
  } as ConnectionConfig)
);
