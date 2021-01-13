import { Module } from '@nestjs/common';
import { OrmModule } from './orm.module';
import { ConnectionModule } from './connection.module';
import { UserSubscriber } from './subscribers/user.subscriber';
import { EncryptionModule } from '../../../encryption/encryption.module';

@Module({
  imports: [EncryptionModule, OrmModule, ConnectionModule],
  providers: [UserSubscriber],
})
export class ApiModule {}
