import { Module } from '@nestjs/common';
import { OrmModule } from './orm.module';
import { ConnectionModule } from './connection.module';

@Module({
  imports: [OrmModule, ConnectionModule],
})
export class ApiModule {}
