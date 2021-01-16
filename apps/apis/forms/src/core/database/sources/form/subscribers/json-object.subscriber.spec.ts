import { Test } from '@nestjs/testing';
import { FormModule } from '../form.module';
import { getConnection } from 'typeorm';
import { ConnectionProvider } from '../connection.provider';
import { JsonObject } from '../entities/json-object.entity';
import { validate, version, v4 as uuidv4 } from 'uuid';
import { runDatabaseDependentTest } from '@battle-of-state-managers/test/nest';

describe('Person Subscriber', () => {
  async function setup() {
    const app = await Test.createTestingModule({
      imports: [FormModule],
    }).compile();

    return { app };
  }

  it('populates id with uuid v4 and maintains it', async () => {
    const { app } = await setup();

    const connectionProvider = app.get<ConnectionProvider>(ConnectionProvider);
    const connection = getConnection(connectionProvider.config.name);

    await runDatabaseDependentTest(
      app,
      connection,
      async (): Promise<void> => {
        const jsonObjectRepository = connection.getRepository<JsonObject>(
          JsonObject
        );
        expect(await jsonObjectRepository.count()).toEqual(0);

        // Creating
        const jsonObject = jsonObjectRepository.create({
          object: 'a cool mcdude',
          userId: uuidv4(),
        });

        // Saving
        let savedJsonObject = await jsonObjectRepository.save(jsonObject);
        expect(savedJsonObject).toBe(jsonObject);
        expect(validate(jsonObject.id)).toEqual(true);
        expect(version(jsonObject.id)).toEqual(4);
        expect(await jsonObjectRepository.count()).toEqual(1);

        // Updating
        const oldId = savedJsonObject.id;
        savedJsonObject.object = '{}';
        savedJsonObject = await jsonObjectRepository.save(savedJsonObject);
        expect(oldId).toEqual(savedJsonObject.id);
        expect(await jsonObjectRepository.count()).toEqual(1);
      }
    );
  });
});
