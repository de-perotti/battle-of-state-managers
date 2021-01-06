import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AccountModule } from './features/account/account.module';

@Module({
  imports: [CoreModule, AccountModule],
})
export class AppModule {}
