import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Person } from '../entities/person.entity';

@EventSubscriber()
export class PersonSubscriber implements EntitySubscriberInterface<Person> {
  listenTo() {
    return Person;
  }

  async beforeInsert(event: InsertEvent<Person>) {
    event.entity.id = event.entity.id || uuidv4();
  }
}
