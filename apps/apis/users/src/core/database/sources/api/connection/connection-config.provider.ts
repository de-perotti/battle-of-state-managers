import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConnectionConfig } from './connection.config';

@Injectable()
export class ConnectionConfigProvider {
  constructor(private readonly configService: ConfigService) {}

  get config() {
    return this.configService.get<ConnectionConfig>('api-db-connection');
  }
}
