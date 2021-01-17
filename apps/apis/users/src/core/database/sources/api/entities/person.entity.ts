import { Column, Entity, Index, OneToMany, PrimaryColumn } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from '../../../shared/entities/base.entity';

@Entity('persons')
export class Person extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Index()
  @Column({ name: 'name', type: 'varchar', length: 256, nullable: true })
  name: string;

  @OneToMany(() => User, (user) => user.person, { lazy: true })
  users: Promise<User[]>;
}
