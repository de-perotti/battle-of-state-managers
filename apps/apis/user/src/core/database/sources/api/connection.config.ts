import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from './ormconfig.json';
import merge from 'lodash/merge';

export type ConnectionConfig = TypeOrmModuleOptions;

export const connectionConfig = registerAs('api-db-connection', () =>
  merge(config, {
    migrationsRun: Boolean(
      process.env.API_DB_RUN_MIGRATION &&
        process.env.API_DB_RUN_MIGRATION === 'true'
    ),
    database: process.env.API_DB_NAME,
    username: process.env.API_DB_USER,
    password: process.env.API_DB_PASSWORD,
    logging: process.env.API_DB_LOGGING,
  } as ConnectionConfig)
);
