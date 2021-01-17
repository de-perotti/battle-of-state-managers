import { Injectable, Scope } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../../core/database/sources/api/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../../core/database/sources/api/entities/person.entity';
import { SaltService } from '../../core/encryption/salt/salt.service';
import { NewAccountDto } from './new-account.dto';

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
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    private readonly saltService: SaltService
  ) {}

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
