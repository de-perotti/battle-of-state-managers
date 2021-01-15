import { Test } from '@nestjs/testing';
import { ApiModule } from '../api.module';
import { Connection, getConnection } from 'typeorm';
import { ConnectionProvider } from '../connection.provider';
import { validate, version } from 'uuid';
import { runDatabaseDependentTest } from '@battle-of-state-managers/test/nest';
import { User } from '../entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
import { Person } from '../entities/person.entity';

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
        await user.save({ reload: true });
        expect(oldId).toEqual(user.id);
        expect(await userRepository.count()).toEqual(1);
      }
    );
  });
});
