import { Module } from '@nestjs/common';
import { ConnectionModule } from './connection.module';
import { EncryptionModule } from '../../../encryption/encryption.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionProvider } from './connection.provider';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { ConfigurationModule } from '../../../configuration/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { connectionConfig } from './connection.config';

const OrmModule = TypeOrmModule.forRootAsync({
  imports: [
    ConfigurationModule,
    ConfigModule.forFeature(connectionConfig),
    ConnectionModule,
  ],
  useFactory(connection: ConnectionProvider) {
    return connection.config as TypeOrmModuleOptions;
  },
  inject: [ConnectionProvider],
});

@Module({
  imports: [EncryptionModule, OrmModule, ConnectionModule],
  exports: [OrmModule],
})
export class ApiModule {}
