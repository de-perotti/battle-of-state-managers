import { TypeOrmModule } from '@nestjs/typeorm';
import { ConnectionProvider } from './connection.provider';
import { ConnectionModule } from './connection.module';

export const OrmModule = TypeOrmModule.forRootAsync({
  imports: [ConnectionModule],
  useFactory(connection: ConnectionProvider) {
    return connection.config;
  },
  inject: [ConnectionProvider],
});
