import {
  BaseEntity,
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Person } from './person.entity';

@Entity('users')
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Index()
  @Column({ name: 'email', type: 'varchar', length: 254, unique: true })
  email: string;

  @Column({ name: 'password', type: 'varchar', length: 256 })
  password: string;

  @Column({ name: 'person_id', type: 'character varying', nullable: false })
  personId: string;

  @ManyToOne(() => Person, (person) => person.users, {
    lazy: true,
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn({ name: 'person_id' })
  person: Promise<Person>;
}
