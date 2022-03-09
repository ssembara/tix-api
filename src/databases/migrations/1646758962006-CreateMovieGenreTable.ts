import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateMovieGenreTable1646758962006 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'movie_has_genres',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'movie_id',
            type: 'int',
          },
          {
            name: 'genre_id',
            type: 'int',
          },
        ],
        foreignKeys: [
          {
            name: 'Movie',
            referencedTableName: 'movies',
            referencedColumnNames: ['id'],
            columnNames: ['movie_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'Genre',
            referencedTableName: 'genres',
            referencedColumnNames: ['id'],
            columnNames: ['genre_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('movie_has_genres');
  }
}
