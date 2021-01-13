import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from './jwt.config';
import { cookieExtractor } from './cookie.extractor';
import { JWT_STRATEGY_NAME } from './jwt.constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY_NAME) {
  constructor(configService: ConfigService) {
    const jwtConfig = configService.get<JwtConfig>('jwt');

    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        cookieExtractor(jwtConfig.cookieName),
      ]),
      secretOrKey: jwtConfig.secret,
      ignoreExpiration: false,
    });
  }
}
