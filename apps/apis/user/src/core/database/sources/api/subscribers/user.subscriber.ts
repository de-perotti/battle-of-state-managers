import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { SaltService } from '../../../../encryption/salt/salt.service';

@EventSubscriber()
export class UserSubscriber implements EntitySubscriberInterface<User> {
  constructor(
    private readonly connection: Connection,
    private readonly saltService: SaltService
  ) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return User;
  }

  async beforeInsert(event: InsertEvent<User>) {
    event.entity.password = await this.saltService.salt(event.entity.password);
    event.entity = uuidv4();
  }
}
