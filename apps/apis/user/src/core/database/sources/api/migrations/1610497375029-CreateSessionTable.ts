import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateSessionTable1610497375029 implements MigrationInterface {
  public static TABLE_NAME = 'sessions';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: CreateSessionTable1610497375029.TABLE_NAME,
        indices: [
          {
            columnNames: ['user_id'],
          },
        ],
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'user_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'expires_at',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            isNullable: false,
            default: 'now()',
          },
        ],
      }),
      false,
      false,
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      CreateSessionTable1610497375029.TABLE_NAME,
      false,
      false,
      true
    );
  }
}
