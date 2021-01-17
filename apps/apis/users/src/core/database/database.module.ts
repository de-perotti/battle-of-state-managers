import { Module } from '@nestjs/common';
import { ApiModule } from './sources/api/api.module';

@Module({
  imports: [ApiModule],
  exports: [ApiModule],
})
export class DatabaseModule {}
