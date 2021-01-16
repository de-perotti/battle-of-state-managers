import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { saltConfiguration } from './saltConfiguration';
import { SaltService } from './salt.service';

@Module({
  imports: [ConfigModule.forFeature(saltConfiguration)],
  providers: [SaltService],
  exports: [SaltService],
})
export class SaltModule {}
