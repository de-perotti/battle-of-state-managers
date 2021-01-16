import { Test } from '@nestjs/testing';
import { ApiModule } from '../api.module';
import { getConnection } from 'typeorm';
import { ConnectionProvider } from '../connection.provider';
import { Person } from '../entities/person.entity';
import { validate, version } from 'uuid';
import { runDatabaseDependentTest } from '@battle-of-state-managers/test/nest';

describe('Person Subscriber', () => {
  async function setup() {
    const app = await Test.createTestingModule({
      imports: [ApiModule],
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
  });
});
