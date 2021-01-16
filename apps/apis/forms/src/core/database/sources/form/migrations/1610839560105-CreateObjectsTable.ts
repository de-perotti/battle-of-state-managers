import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateObjectsTable1610839560105 implements MigrationInterface {
  public static TABLE_NAME = 'objects';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: CreateObjectsTable1610839560105.TABLE_NAME,
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
            generationStrategy: 'uuid',
            isNullable: false,
          },
          {
            name: 'object',
            type: 'jsonb',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'deleted_at',
            type: 'timestamp with time zone',
            isNullable: true,
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
      CreateObjectsTable1610839560105.TABLE_NAME,
      false,
      false,
      true
    );
  }
}
