import { Module } from '@nestjs/common';
import { ConnectionProvider } from './connection.provider';
import { ConfigurationModule } from '../../../configuration/configuration.module';
import { ConfigModule } from '@nestjs/config';
import { connectionConfig } from './connection.config';

@Module({
  imports: [ConfigurationModule, ConfigModule.forFeature(connectionConfig)],
  providers: [ConnectionProvider],
  exports: [ConnectionProvider],
})
export class ConnectionModule {}
