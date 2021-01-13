import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';
import config from './ormconfig.json';
import { CreatePersonsTable1610493939987 } from './migrations/1610493939987-CreatePersonsTable';
import { CreateUsersTable1610494267701 } from './migrations/1610494267701-CreateUsersTable';
import { Person } from './entities/person.entity';
import { User } from './entities/user.entity';

@Injectable()
export class ConnectionProvider {
  config: TypeOrmModuleOptions = {
    ...(config as TypeOrmModuleOptions),
    migrations: [
      CreatePersonsTable1610493939987,
      CreateUsersTable1610494267701,
    ],
    entities: [Person, User],
  };
}
