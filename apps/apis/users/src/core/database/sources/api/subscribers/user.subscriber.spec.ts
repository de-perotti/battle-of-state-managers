import { Test } from '@nestjs/testing';
import { ApiModule } from '../api.module';
import { getConnection } from 'typeorm';
import { validate, version, v4 as uuidv4 } from 'uuid';
import {
  loadDump,
  runDatabaseDependentTest,
} from '@battle-of-state-managers/test/nest';
import { User } from '../entities/user.entity';
import { Person } from '../entities/person.entity';
import { connectionConfig } from '../connection/connection.config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConnectionConfigProvider } from '../connection/connection-config.provider';

describe('Person Subscriber', () => {
  async function setup() {
    const c = connectionConfig();
    const config: PostgresConnectionOptions = {
      ...connectionConfig(),
      database: c.database + uuidv4().replace(/-/g, ''),
      type: 'postgres',
    };
    await loadDump(c.database, config);

    const app = await Test.createTestingModule({
      imports: [ApiModule],
    })
      .overrideProvider(ConnectionConfigProvider)
      .useValue({ config })
      .compile();

    const connection = getConnection(config.name);
    return { app, connection };
  }

  it('populates id with uuid v4 and maintains it', async () => {
    const { app, connection } = await setup();

    await runDatabaseDependentTest(
      app,
      connection,
      async (): Promise<void> => {
        const userRepository = connection.getRepository<User>(User);
        const personRepository = connection.getRepository<Person>(Person);
        expect(await userRepository.count()).toEqual(0);

        // Creating
        const user = userRepository.create({
          password: 'something',
          email: 'email',
          personId: uuidv4(),
        });
        expect(validate(user.id)).toEqual(false);
        const person = personRepository.create({
          id: user.personId,
          name: 'a cool mcdude',
        });

        // Saving
        await personRepository.save(person);
        const savedUser = await userRepository.save(user);
        expect(savedUser).toBe(user);
        expect(validate(user.id)).toEqual(true);
        expect(version(user.id)).toEqual(4);
        expect(await userRepository.count()).toEqual(1);

        // Updating
        const oldId = user.id;
        user.email = 'somethingelse';
        await userRepository.save(user);
        expect(oldId).toEqual(user.id);
        expect(await userRepository.count()).toEqual(1);
      }
    );
  });
});
