import { DynamicModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { connectionConfig } from './connection.config';
import { ConnectionConfigProvider } from './connection-config.provider';

@Module({})
export class ConnectionModule {
  static register({
    connectionName,
    databaseName,
  }: {
    connectionName: string;
    databaseName?: string;
  }): DynamicModule {
    const config = connectionConfig({ connectionName, databaseName });
    return {
      module: ConnectionModule,
      imports: [ConfigModule.forFeature(config)],
      providers: [ConnectionConfigProvider],
      exports: [ConnectionConfigProvider],
    };
  }
}
