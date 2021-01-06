import { Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryColumn({ generated: 'uuid' })
  id: string;

  // User has many sessions
  // Session has one user
  // User has one person
  // Person has multiple users
  // User can be pre-user
  // Pre-user will not be converted to a user
  // Instead, a new user is created using information from the pre-user
}
