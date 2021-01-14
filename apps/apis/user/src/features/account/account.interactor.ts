import { Injectable, InternalServerErrorException } from '@nestjs/common';
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
@Injectable()
export class AccountInteractor {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    private readonly saltService: SaltService
  ) {}

  private user: User;

  async validateCredentials(
    email: string,
    password: string
  ): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!this.user) {
      return null;
    }

    const matches = await this.user.comparePassword(password, this.saltService);

    if (!matches) {
      return null;
    }

    return (this.user = user);
  }

  async create({ email, name, password }: NewAccountDto): Promise<User | null> {
    if (this.user) {
      throw new InternalServerErrorException('user should be already set');
    }

    await this.userRepository.manager.transaction(async (manager) => {
      const personRepository = manager.getRepository<Person>(Person);
      const person: Person = personRepository.create({ name });
      const {
        identifiers: [{ id }],
      } = await manager.insert(Person, person);

      const userRepository = manager.getRepository<User>(User);
      const user: User = userRepository.create({
        email,
        password,
        personId: id,
      });
      await manager.insert(User, user);
    });

    return this.userRepository.findOne({ where: { email } });
  }

  async delete(): Promise<void> {
    if (!this.user) {
      throw new InternalServerErrorException(
        'user should have been set already by jwt-guard'
      );
    }

    const person = await this.user.person;
    await this.personRepository.delete(person.id);
    delete this.user;
  }
}
