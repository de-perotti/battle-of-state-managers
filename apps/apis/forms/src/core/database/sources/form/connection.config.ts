import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from './ormconfig.json';
import merge from 'lodash/merge';

export type ConnectionConfig = TypeOrmModuleOptions;

export const connectionConfig = registerAs('form-db-connection', () =>
  merge(config, {
    migrationsRun: Boolean(
      process.env.DB_FORM_RUN_MIGRATION &&
        process.env.DB_FORM_RUN_MIGRATION === 'true'
    ),
    port: process.env.DB_FORM_PORT,
    host: process.env.DB_FORM_HOST || undefined,
    database: process.env.DB_FORM_NAME || undefined,
    username: process.env.DB_FORM_USER || undefined,
    password: process.env.DB_FORM_PASSWORD || undefined,
    logging: process.env.DB_FORM_LOGGING || undefined,
  } as ConnectionConfig)
);
