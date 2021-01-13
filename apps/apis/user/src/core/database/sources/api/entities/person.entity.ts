import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('persons')
export class Person {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Index()
  @Column({ name: 'name', type: 'varchar', length: 256 })
  name: string;

  @OneToMany(() => User, (user) => user.person, { lazy: true })
  users: Promise<User[]>;
}
