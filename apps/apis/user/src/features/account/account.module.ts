import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AccountController } from './account.controller';
import { AuthController } from './auth.controller';
import { JwtModule } from './jwt/jwt.module';
import { AccountService } from './account.service';
import cookieParser from 'cookie-parser';
import { AccountInterceptor } from './account.interceptor';
import { AccountInteractor } from './account.interactor';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../core/database/sources/api/entities/user.entity';
import { Person } from '../../core/database/sources/api/entities/person.entity';
import { EncryptionModule } from '../../core/encryption/encryption.module';
import { DatabaseModule } from '../../core/database/database.module';

@Module({
  imports: [
    DatabaseModule,
    JwtModule,
    TypeOrmModule.forFeature([Person, User]),
    EncryptionModule,
  ],
  providers: [AccountService, AccountInterceptor, AccountInteractor],
  controllers: [AuthController, AccountController],
})
export class AccountModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer {
    return consumer
      .apply(cookieParser())
      .forRoutes(AccountController, AuthController);
  }
}
