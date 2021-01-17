import { Module } from '@nestjs/common';
import { ObjectController } from './object.controller';

@Module({
  controllers: [ObjectController],
})
export class ObjectModule {}
