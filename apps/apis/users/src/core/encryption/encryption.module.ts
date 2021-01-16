import { Module } from '@nestjs/common';
import { SaltModule } from './salt/salt.module';

@Module({
  imports: [SaltModule],
  exports: [SaltModule],
})
export class EncryptionModule {}
