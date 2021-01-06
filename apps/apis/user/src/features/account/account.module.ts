import { Module } from '@nestjs/common';
import { AccountController } from './account-management.controller';

@Module({
  controllers: [AccountController],
})
export class AccountModule {}
