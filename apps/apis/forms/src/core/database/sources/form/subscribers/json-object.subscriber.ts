import {
  Connection,
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { JsonObject } from '../entities/json-object.entity';

@EventSubscriber()
export class JsonObjectSubscriber
  implements EntitySubscriberInterface<JsonObject> {
  constructor(private readonly connection: Connection) {
    connection.subscribers.push(this);
  }

  listenTo() {
    return JsonObject;
  }

  async beforeInsert(event: InsertEvent<JsonObject>) {
    event.entity.id = event.entity.id || uuidv4();
  }
}
