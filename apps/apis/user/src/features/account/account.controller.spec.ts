import { AccountModule } from './account.module';
import { Test } from '@nestjs/testing';
import { AccountInteractor } from './account.interactor';
import { runDatabaseDependentExternalTest } from '@battle-of-state-managers/test/nest';
import { ConnectionProvider } from '../../core/database/sources/api/connection.provider';
import { getConnection } from 'typeorm';
import { NewAccountDto } from './new-account.dto';
import supertest from 'supertest';
import { HttpStatus } from '@nestjs/common';
import { User } from '../../core/database/sources/api/entities/user.entity';

describe('Account Controller', () => {
  async function setup() {
    const app = await Test.createTestingModule({
      imports: [AccountModule],
    }).compile();
    return { app };
  }

  describe('(create) POST /accounts', () => {
    describe('valid body', () => {
      it('creates an accounts', async () => {
        const { app } = await setup();
        const connection = getConnection(
          app.get<ConnectionProvider>(ConnectionProvider).config.name
        );

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
    // describe('invalid body', () => {});
  });

  // describe('(delete) DELETE /accounts', () => {});
});
