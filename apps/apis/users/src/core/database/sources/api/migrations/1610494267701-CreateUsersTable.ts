import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { CreatePersonsTable1610493939987 } from './1610493939987-CreatePersonsTable';
import { TableColumnOptions } from 'typeorm/schema-builder/options/TableColumnOptions';
import { TableForeignKeyOptions } from 'typeorm/schema-builder/options/TableForeignKeyOptions';
import { dateColumns } from '../../../shared/migrations/dates';

export class CreateUsersTable1610494267701 implements MigrationInterface {
  public static TABLE_NAME = 'users';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const foreignKeys: TableForeignKeyOptions[] = [
      {
        columnNames: ['person_id'],
        referencedColumnNames: ['id'],
        referencedTableName: CreatePersonsTable1610493939987.TABLE_NAME,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
      },
    ];

    const indices = [
      {
        columnNames: ['email'],
      },
    ];

    const columns: TableColumnOptions[] = [
      {
        name: 'id',
        type: 'uuid',
        isPrimary: true,
        generationStrategy: 'uuid',
      },
      {
        name: 'email',
        type: 'varchar',
        length: '254',
        isUnique: true,
      },
      {
        name: 'password',
        type: 'varchar',
        length: '256',
      },
      {
        name: 'person_id',
        type: 'uuid',
        isNullable: false,
      },
      ...dateColumns,
    ];

    await queryRunner.createTable(
      new Table({
        name: CreateUsersTable1610494267701.TABLE_NAME,
        foreignKeys,
        indices,
        columns,
      }),
      false,
      true,
      true
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(
      CreateUsersTable1610494267701.TABLE_NAME,
      false,
      true,
      true
    );
  }
}
