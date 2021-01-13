import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { AccountModule } from './features/account/account.module';
import { ConfigModule } from '@nestjs/config';
import { appConfig } from './app.config';
import * as cookieParser from 'cookie-parser';

@Module({
  imports: [CoreModule, ConfigModule.forFeature(appConfig), AccountModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(cookieParser());
  }
}
