import { Test } from '@nestjs/testing';
import { ObjectModule } from './object.module';
import { runDatabaseDependentExternalTest } from '@battle-of-state-managers/test/nest';
import supertest from 'supertest';
import { v4 as uuidv4 } from 'uuid';
import { JsonObjectDto } from './json-object.dto';

describe('Object Controller', () => {
  async function setup() {
    const app = await Test.createTestingModule({
      imports: [ObjectModule],
    }).compile();
    return { app };
  }

  describe('(create) POST /objects', () => {
    const jsonString = JSON.stringify({ meuirmao: 'a parada é braba' });
    const uuid = uuidv4();
    const validDto = { object: jsonString, userId: uuid };

    describe.each([
      { object: 1 },
      { object: [] },
      { object: {} },
      { object: new Date() },
      { object: '' },
      { userId: '123' },
    ] as Array<Partial<JsonObjectDto>>)('validation %j', (ca) => {
      it('accepts nothing but a valid dto', async () => {
        const { app } = await setup();
        await runDatabaseDependentExternalTest(
          app,
          null,
          async (nestApplication) => {
            await supertest(nestApplication.getHttpServer())
              .post('/objects')
              .send({ ...validDto, ...ca })
              .expect(400);
          }
        );
      });
    });

    describe('happy path', () => {
      it('returns the object passed', async () => {
        const { app } = await setup();
        await runDatabaseDependentExternalTest(
          app,
          null,
          async (nestApplication) => {
            await supertest(nestApplication.getHttpServer())
              .post('/objects')
              .send({ object: jsonString, userId: uuid })
              .expect({ object: jsonString, userId: uuid });
          }
        );
      });
    });
  });
});
