import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from './jwt/jwt.guard';
import { AccountInteractor } from './account.interactor';
import { NewAccountDto } from './new-account.dto';
import { AccountInterceptor } from './account.interceptor';

@Controller('account')
export class AccountController {
  constructor(private readonly accountInteractor: AccountInteractor) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @UsePipes(ValidationPipe)
  async createAccount(@Body() body: NewAccountDto) {
    await this.accountInteractor.create(body);
  }

  @Delete()
  @HttpCode(HttpStatus.NO_CONTENT)
  @UseGuards(JwtGuard)
  @UseInterceptors(AccountInterceptor)
  async deleteAccount() {
    await this.accountInteractor.delete();
  }
}
