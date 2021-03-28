import { Test } from '@nestjs/testing';
import { ApiModule } from '../api.module';
import { Connection } from 'typeorm';
import { Person } from '../entities/person.entity';
import range from 'lodash/range';
import { validate, version, v4 as uuidv4 } from 'uuid';
import {
  loadDump,
  runDatabaseDependentTest,
} from '@battle-of-state-managers/test/nest';
import { connectionConfig } from '../connection/connection.config';

describe('Person Subscriber', () => {
  async function setup() {
    const defaultConfig = connectionConfig({ connectionName: 'something' })();
    const randomDatabaseName = uuidv4().replace(/-/g, '');
    await loadDump(defaultConfig.database, {
      ...defaultConfig,
      database: randomDatabaseName,
    });

    const connectionName = uuidv4().replace(/-/g, '');

    const app = await Test.createTestingModule({
      imports: [
        ApiModule.register({
          databaseName: randomDatabaseName,
          connectionName,
        }),
      ],
    }).compile();

    return { app, connectionName };
  }

  it.concurrent.each(range(50))(
    'populates id with uuid v4 and maintains it %#',
    async (i) => {
      const { app, connectionName } = await setup();

      await runDatabaseDependentTest(
        app,
        connectionName,
        async (connection: Connection): Promise<void> => {
          console.log(i, connection.name, connection.options.database);
          const personRepository = connection.getRepository<Person>(Person);
          expect(await personRepository.count()).toEqual(0);

          // Creating
          const person = personRepository.create({
            name: 'a cool mcdude',
          });

          // Saving
          let savedPerson = await personRepository.save(person);
          expect(savedPerson).toBe(person);
          expect(validate(person.id)).toEqual(true);
          expect(version(person.id)).toEqual(4);
          expect(await personRepository.count()).toEqual(1);

          // Updating
          const oldId = savedPerson.id;
          savedPerson.name = 'not a cool mcdude';
          savedPerson = await personRepository.save(savedPerson);
          expect(oldId).toEqual(savedPerson.id);
          expect(await personRepository.count()).toEqual(1);
        }
      );
    }
  );
});
