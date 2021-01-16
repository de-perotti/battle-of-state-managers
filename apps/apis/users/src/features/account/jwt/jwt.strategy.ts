import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from './jwt.config';
import { cookieExtractor } from './cookie.extractor';
import { JWT_STRATEGY_NAME } from './jwt.constants';
import { JwtPayloadDto } from './jwt-payload.dto';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, JWT_STRATEGY_NAME) {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        cookieExtractor(configService.get<JwtConfig>('jwt').cookieName),
      ]),
      secretOrKey: configService.get<JwtConfig>('jwt').secret,
      ignoreExpiration: false,
    });
  }

  validate(payload: JwtPayloadDto): JwtPayloadDto {
    return payload;
  }
}
