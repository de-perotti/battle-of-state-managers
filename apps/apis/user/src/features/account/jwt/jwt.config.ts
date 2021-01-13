import { registerAs } from '@nestjs/config';
import { JwtModuleOptions } from '@nestjs/jwt/dist/interfaces/jwt-module-options.interface';

export type JwtConfig = {
  secret: string;
  cookieName: string;
} & Partial<JwtModuleOptions>;

export const jwtConfig = registerAs(
  'jwt',
  () =>
    ({
      secret: process.env.JWT_SECRET || 'asecret',
      cookieName: process.env.JWT_COOKIE_NAME || 'user-api-user-token',
      signOptions: { expiresIn: process.env.JWT_EXPIRES_IN || '120m' },
    } as JwtConfig)
);
