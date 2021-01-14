import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import identity from 'lodash/identity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [
        process.env.NODE_ENV === 'test' && '.env.test',
        '.env',
      ].filter(identity),
    }),
  ],
})
export class ConfigurationModule {}
