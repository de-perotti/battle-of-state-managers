import { Connection } from 'typeorm';

export async function cleanDatabase(connection: Connection) {
  for (const entity of connection.entityMetadatas) {
    const entityRepository = connection.getRepository(entity.name);
    await entityRepository.delete({});
  }
}
