import { registerAs } from '@nestjs/config';
import toFinite from 'lodash/toFinite';

export type SaltConfiguration = {
  rounds: number;
};

export const saltConfiguration = registerAs(
  'salt',
  (): SaltConfiguration => ({
    rounds: toFinite(process.env.SALT_ROUNDS) || 10,
  })
);
