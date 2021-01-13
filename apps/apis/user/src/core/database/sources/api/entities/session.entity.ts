import { Injectable } from '@nestjs/common';
import {
  PrimaryColumn,
  CreateDateColumn,
  Column,
  Entity,
  Index,
} from 'typeorm';

@Entity('sessions')
export class Session {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Index()
  @Column({ name: 'user_id', type: 'uuid', nullable: false })
  userId: string;

  @Column({
    name: 'expires_at',
    type: 'timestamp with time zone',
    nullable: false,
  })
  expiresAt: Date;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
    nullable: false,
  })
  createdAt: Date;
}
