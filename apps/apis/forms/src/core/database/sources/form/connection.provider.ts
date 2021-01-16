import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import { JsonObject } from './entities/json-object.entity';
import { ConfigService } from '@nestjs/config';
import { CreateObjectsTable1610839560105 } from './migrations/1610839560105-CreateObjectsTable';
import { ConnectionConfig } from './connection.config';

@Injectable()
export class ConnectionProvider {
  config: TypeOrmModuleOptions;

  constructor(private readonly configService: ConfigService) {
    const config = configService.get<ConnectionConfig>('form-db-connection');
    this.config = {
      ...(config as TypeOrmModuleOptions),
      migrations: [CreateObjectsTable1610839560105],
      entities: [JsonObject],
    };
  }
}
