import { Injectable } from '@nestjs/common';

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
 *    SESSION {
 *      uuid user_id
 *      date expires_at
 *    }
 *    %% Account is an interactor
 *    %% It is injected into requests' protected contexts
 *    ACCOUNT_INTERACTOR {
 *      uuid session_id
 *      uuid user_id
 *    }
 *    PERSON ||--|{ USER : has
 *    %% SESSION is not directly related to USER because it allows for
 *    %% better abstractions
 *    ACCOUNT_INTERACTOR ||--o{ SESSION : administers
 *    ACCOUNT_INTERACTOR ||--|| USER : administers
 */
@Injectable()
export class AccountInteractor {}
