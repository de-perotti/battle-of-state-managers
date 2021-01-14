import { Module } from '@nestjs/common';
import { OrmModule } from './orm.module';
import { ConnectionModule } from './connection.module';
import { EncryptionModule } from '../../../encryption/encryption.module';

@Module({
  imports: [EncryptionModule, OrmModule, ConnectionModule],
  exports: [OrmModule],
})
export class ApiModule {}
