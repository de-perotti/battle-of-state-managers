import { Module } from '@nestjs/common';
import { FormModule } from './sources/form/form.module';

@Module({
  imports: [FormModule],
  exports: [FormModule],
})
export class DatabaseModule {}
