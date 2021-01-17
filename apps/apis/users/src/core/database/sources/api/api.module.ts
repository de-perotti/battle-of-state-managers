import { Module } from '@nestjs/common';
import { ConnectionModule } from './connection.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionProvider } from './connection.provider';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { PersonSubscriber } from './subscribers/person.subscriber';
import { UserSubscriber } from './subscribers/user.subscriber';
import omit from 'lodash/omit';

const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConnectionModule],
  useFactory(connection: ConnectionProvider) {
    // Omits name because async typeorm module doesn't accept name in its options
    // Instead the name should be hardcoded in the root DynamicModule options
    return omit(connection.config, 'name') as TypeOrmModuleOptions;
  },
  inject: [ConnectionProvider],
});

@Module({
  imports: [OrmModule, ConnectionModule],
  providers: [PersonSubscriber, UserSubscriber],
  exports: [OrmModule],
})
export class ApiModule {}
