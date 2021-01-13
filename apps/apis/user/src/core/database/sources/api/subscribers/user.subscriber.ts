import {
  EntitySubscriberInterface,
  EventSubscriber,
  getConnection,
  InsertEvent,
} from 'typeorm';
import { User } from '../entities/user.entity';
import { ConnectionProvider } from '../connection.provider';
import { SaltService } from '../../../../encryption/salt/salt.service';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    private readonly connectionProvider: ConnectionProvider,
    private readonly saltService: SaltService
  ) {
    getConnection(connectionProvider.config.name).subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    event.entity.password = await this.saltService.salt(event.entity.password);
  }
}
