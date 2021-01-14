import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionProvider } from './connection.provider';
import { ConnectionModule } from './connection.module';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConnectionModule],
  useFactory(connection: ConnectionProvider) {
    return connection.config as TypeOrmModuleOptions;
  },
  inject: [ConnectionProvider],
});
