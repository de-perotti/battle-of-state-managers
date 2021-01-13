import { JwtFromRequestFunction } from 'passport-jwt';
import { Request } from 'express';

export const cookieExtractor = (cookieName: string): JwtFromRequestFunction => (
  request: Request
) => {
  if (!request.cookies) {
    return null;
  }

  return request.cookies[cookieName] || null;
};
