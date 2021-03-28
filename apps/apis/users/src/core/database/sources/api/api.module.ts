import { DynamicModule, Module } from '@nestjs/common';
import { PersonSubscriber } from './subscribers/person.subscriber';
import { UserSubscriber } from './subscribers/user.subscriber';
import { v4 as uuidv4 } from 'uuid';
import { ConnectionModule } from './connection/connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionConfigProvider } from './connection/connection-config.provider';
import { ConnectionConfig } from './connection/connection.config';
import { CreatePersonsTable1610493939987 } from './migrations/1610493939987-CreatePersonsTable';
import { CreateUsersTable1610494267701 } from './migrations/1610494267701-CreateUsersTable';
import { Person } from './entities/person.entity';
import { User } from './entities/user.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

@Module({})
export class ApiModule {
  static register(
    {
      connectionName,
      databaseName,
    }: {
      connectionName: string;
      databaseName?: string;
    } = { connectionName: '' }
  ): DynamicModule {
    if (!connectionName) {
      connectionName = uuidv4().replace(/-/g, '');
    }

    const connectionMod = ConnectionModule.register({
      connectionName,
      databaseName,
    });

    const staticConfiguration: Partial<TypeOrmModuleOptions> = {
      migrations: [
        CreatePersonsTable1610493939987,
        CreateUsersTable1610494267701,
      ],
      entities: [Person, User],
      subscribers: [UserSubscriber, PersonSubscriber],
    };

    const typeOrmModule = TypeOrmModule.forRootAsync({
      name: connectionName,
      imports: [connectionMod],
      useFactory(configService: ConnectionConfigProvider) {
        // Omits name because async typeorm module doesn't accept name in its options
        // Instead the name should be hardcoded in the root DynamicModule options
        const result = {
          ...configService.config,
          ...staticConfiguration,
        };

        return result as ConnectionConfig;
      },
      inject: [ConnectionConfigProvider],
    }) as DynamicModule;

    const [typeOrmCoreModule] = typeOrmModule.imports;

    return {
      module: ApiModule,
      imports: [typeOrmCoreModule, connectionMod],
      exports: [typeOrmCoreModule, connectionMod],
    };
  }
}
