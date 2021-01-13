import { Injectable, Scope } from '@nestjs/common';
import { Repository } from 'typeorm';
import omit from 'lodash/omit';
import { User } from '../../core/database/sources/api/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Person } from '../../core/database/sources/api/entities/person.entity';
import { SaltService } from '../../core/encryption/salt/salt.service';
import { FindOneOptions } from 'typeorm/find-options/FindOneOptions';

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
  private user: User;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Person)
    private readonly personRepository: Repository<Person>,
    private readonly saltService: SaltService
  ) {}

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
}
