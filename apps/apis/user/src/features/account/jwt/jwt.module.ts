import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { jwtConfig, JwtConfig } from './jwt.config';
import { JwtModule as NestJwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtGuard } from './jwt.guard';

const config = ConfigModule.forFeature(jwtConfig);

const jwtModule = NestJwtModule.registerAsync({
  imports: [ConfigModule, config],
  useFactory(configService: ConfigService) {
    return configService.get<JwtConfig>('jwt');
  },
  inject: [ConfigService],
});

@Module({
  imports: [PassportModule, jwtModule, ConfigModule, config],
  providers: [JwtStrategy, JwtGuard],
  exports: [PassportModule, jwtModule, JwtStrategy, JwtGuard, config],
})
export class JwtModule {}
