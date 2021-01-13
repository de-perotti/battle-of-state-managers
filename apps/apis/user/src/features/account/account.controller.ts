import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtGuard } from './jwt/jwt.guard';

@Controller('account')
@UseGuards(JwtGuard)
export class AccountController {
  @Get()
  sendHi() {
    return 'hi';
  }
}
