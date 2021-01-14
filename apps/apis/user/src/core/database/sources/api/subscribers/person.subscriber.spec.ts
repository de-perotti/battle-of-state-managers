import { Test } from '@nestjs/testing';
import { ApiModule } from '../api.module';
import { TestingModule } from '@nestjs/testing/testing-module';
import identity from 'lodash/identity';

async function run(
  app: TestingModule,
  cb: (app: TestingModule) => Promise<undefined>
) {
  await app.init();
  const error = await cb(app).catch(identity);
  await app.close();
  if (error) {
    throw error;
  }
}

describe('Person Subscriber', () => {
  async function setup() {
    const app = await Test.createTestingModule({
      imports: [ApiModule],
    }).compile();

    return { app };
  }

  it('compiles', async () => {
    const { app } = await setup();
  });
});
