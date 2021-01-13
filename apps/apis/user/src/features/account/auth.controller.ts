import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AccountService } from './account.service';
import { AuthLoginDto } from './auth-login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayloadDto } from './jwt/jwt-payload.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtConfig } from './jwt/jwt.config';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly accountService: AccountService,
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.NO_CONTENT)
  async login(
    @Body() body: AuthLoginDto,
    @Res({ passthrough: true }) response: Response
  ) {
    const user = await this.accountService.validate(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('wrong credentials');
    }

    const payload: JwtPayloadDto = { email: user.email };
    const token = await this.jwtService.signAsync(payload);
    const jwtConfig = this.configService.get<JwtConfig>('jwt');
    response.cookie(jwtConfig.cookieName, token, { httpOnly: true });
  }

  @Post('logout')
  async logout(@Res({ passthrough: true }) response: Response) {
    const jwtConfig = this.configService.get<JwtConfig>('jwt');
    response.clearCookie(jwtConfig.cookieName);
  }
}
