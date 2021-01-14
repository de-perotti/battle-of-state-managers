import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AccountModule } from './account/account.module';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [AccountModule],
})
export class FeaturesModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cookieParser());
  }
}
