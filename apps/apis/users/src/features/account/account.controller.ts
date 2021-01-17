import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  Res,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from './jwt/jwt.guard';
import { AccountInteractor } from './account.interactor';
import { NewAccountDto } from './new-account.dto';
import { AccountInteractorInjectionInterceptor } from './account-interactor-injection-interceptor.service';
import { JwtConfig } from './jwt/jwt.config';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Controller('accounts')
export class AccountController {
  constructor(
    private readonly accountInteractor: AccountInteractor,
    private readonly configService: ConfigService
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  async createAccount(@Body() body: NewAccountDto): Promise<void> {
    await this.accountInteractor.create(body);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtGuard)
  @UseInterceptors(AccountInteractorInjectionInterceptor)
  async deleteAccount(
    @Res({ passthrough: true }) response: Response
  ): Promise<void> {
    await this.accountInteractor.delete();
    const jwtConfig = this.configService.get<JwtConfig>('jwt');
    response.clearCookie(jwtConfig.cookieName);
  }
}
