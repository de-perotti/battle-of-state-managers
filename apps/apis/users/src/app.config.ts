import { registerAs } from '@nestjs/config';
import toFinite from 'lodash/toFinite';

export type AppConfig = {
  port: number;
};

export const appConfig = registerAs('app', () => ({
  port: toFinite(process.env.API_USER_PORT),
}));
