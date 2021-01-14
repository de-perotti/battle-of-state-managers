import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtGuard } from './jwt/jwt.guard';
import { AccountInteractor } from './account.interactor';
import { NewAccountDto } from './new-account.dto';

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
  @UseGuards(JwtGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteAccount() {
    await this.accountInteractor.delete();
  }
}
