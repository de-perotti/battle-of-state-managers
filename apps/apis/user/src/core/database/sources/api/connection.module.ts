import { Module } from '@nestjs/common';
import { ConnectionProvider } from './connection.provider';

@Module({
  providers: [ConnectionProvider],
  exports: [ConnectionProvider],
})
export class ConnectionModule {}
