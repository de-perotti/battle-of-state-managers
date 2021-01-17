import { Column, Entity, Index, PrimaryColumn } from 'typeorm';
import { BaseEntity } from '../../../shared/entities/base.entity';

/**
 * @mermaid
 * erDiagram
 *    USER
 *    FORM
 *    USER ||--o| FORM : has
 */
@Entity('objects')
export class JsonObject extends BaseEntity {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Index()
  @Column({ name: 'user_id', type: 'uuid', nullable: false })
  userId: string;

  @Column({ name: 'object', type: 'jsonb', nullable: false, array: false })
  object: string;
}
