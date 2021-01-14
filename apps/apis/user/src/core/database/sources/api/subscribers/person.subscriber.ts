import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Person } from '../entities/person.entity';

@EventSubscriber()
export class PersonSubscriber implements EntitySubscriberInterface<Person> {
  constructor(private readonly connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return Person;
  }

  async beforeInsert(event: InsertEvent<Person>) {
    event.entity.id = event.entity.id || uuidv4();
  }
}
