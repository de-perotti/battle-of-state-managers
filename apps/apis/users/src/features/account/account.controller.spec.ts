import { AccountModule } from './account.module';
import { Test } from '@nestjs/testing';
import { AccountInteractor } from './account.interactor';
import {
  loadDump,
  runDatabaseDependentExternalTest,
} from '@battle-of-state-managers/test/nest';
import { getConnection } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { NewAccountDto } from './new-account.dto';
import supertest from 'supertest';
import { HttpStatus } from '@nestjs/common';
import { User } from '../../core/database/sources/api/entities/user.entity';
import { connectionConfig } from '../../core/database/sources/api/connection/connection.config';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ConnectionConfigProvider } from '../../core/database/sources/api/connection/connection-config.provider';

describe('Account Controller', () => {
  async function setup() {
    const c = connectionConfig();
    const config: PostgresConnectionOptions = {
      ...connectionConfig(),
      database: c.database + uuidv4().replace(/-/g, ''),
      type: 'postgres',
    };
    await loadDump(c.database, config);

    const app = await Test.createTestingModule({
      imports: [AccountModule],
    })
      .overrideProvider(ConnectionConfigProvider)
      .useValue({ config })
      .compile();

    const connection = getConnection(config.name);

    return { app, connection };
  }

  describe('(create) POST /accounts', () => {
    describe('valid body', () => {
      it('creates an accounts', async () => {
        const { app, connection } = await setup();

        await runDatabaseDependentExternalTest(
          app,
          connection,
          async (nestApplication) => {
            const credentials: NewAccountDto = {
              email: 'someemail@gmail.com',
              password: 'awellroundedpassword',
            };

            await supertest(nestApplication.getHttpServer())
              .post('/accounts')
              .send(credentials)
              .expect(HttpStatus.CREATED);

            const accountInteractor = await app.resolve<AccountInteractor>(
              AccountInteractor
            );
            const user = await accountInteractor.init({
              email: credentials.email,
            });
            expect(user).not.toBeNull();
            expect(user).toBeInstanceOf(User);
          }
        );
      });
    });
  });
});
