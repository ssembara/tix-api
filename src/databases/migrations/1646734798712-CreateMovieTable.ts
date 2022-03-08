import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovieTable1646734798712 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movies',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'director',
            type: 'varchar',
          },
          {
            name: 'age_rating',
            type: 'varchar',
          },
          {
            name: 'synopsis',
            type: 'varchar',
          },
          {
            name: 'duration',
            type: 'time',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movies');
  }
}
