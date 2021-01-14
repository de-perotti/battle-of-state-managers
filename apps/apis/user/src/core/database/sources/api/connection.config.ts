import { registerAs } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from './ormconfig.json';
import merge from 'lodash/merge';

export type ConnectionConfig = TypeOrmModuleOptions;

export const connectionConfig = registerAs('api-db-connection', () =>
  merge(config, { database: process.env.API_DB_NAME })
);
