import { Injectable, Scope } from '@nestjs/common';
import { getConnection, Repository } from 'typeorm';
import { User } from '../../core/database/sources/api/entities/user.entity';
import { Person } from '../../core/database/sources/api/entities/person.entity';
import { SaltService } from '../../core/encryption/salt/salt.service';
import { NewAccountDto } from './new-account.dto';
import { ConnectionConfigProvider } from '../../core/database/sources/api/connection/connection-config.provider';

/**
 * @mermaid
 * erDiagram
 *    %% All entities also carry dates with soft deletion
 *    PERSON {
 *      uuid id
 *      string name
 *    }
 *    %% Passwords are salted
 *    USER {
 *      uuid id
 *      uuid person_id
 *      string email
 *      string password
 *    }
 *    %% Account is an interactor
 *    %% It is injected into requests' protected contexts
 *    ACCOUNT_INTERACTOR {
 *      uuid session_id
 *      uuid user_id
 *    }
 *    PERSON ||--|{ USER : has
 *    ACCOUNT_INTERACTOR ||--|| USER : administers
 */
@Injectable({ scope: Scope.REQUEST })
export class AccountInteractor {
  private readonly personRepository: Repository<Person>;
  private readonly userRepository: Repository<User>;

  constructor(
    private readonly connectionConfigProvider: ConnectionConfigProvider,
    private readonly saltService: SaltService
  ) {
    const connection = getConnection(this.connectionConfigProvider.config.name);
    this.personRepository = connection.getRepository<Person>(Person);
    this.userRepository = connection.getRepository<User>(User);
  }

  private user: User;

  async init(payload: { email: string }): Promise<User | null> {
    const user = await this.userRepository.findOne({
      where: { email: payload.email },
    });
    if (!user) {
      return null;
    }

    return (this.user = user);
  }

  async validateCredentials(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }

    const matches = await this.saltService.compare(password, user.password);

    if (!matches) {
      return null;
    }

    return (this.user = user);
  }

  async create({ email, name, password }: NewAccountDto): Promise<User | null> {
    await this.userRepository.manager.transaction(async (manager) => {
      const personRepository = manager.getRepository<Person>(Person);
      const person: Person = personRepository.create({ name });
      const {
        identifiers: [{ id }],
      } = await manager.insert(Person, person);

      const userRepository = manager.getRepository<User>(User);
      const user: User = userRepository.create({
        email,
        password: await this.saltService.salt(password),
        personId: id,
      });
      await manager.insert(User, user);
    });

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      return null;
    }

    return (this.user = user);
  }

  async delete(): Promise<void> {
    const person = await this.user.person;
    await this.personRepository.delete(person.id);
    delete this.user;
  }
}
