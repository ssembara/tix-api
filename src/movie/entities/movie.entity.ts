import { GenreEntity } from 'src/genre/entities/genre.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'movies' })
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('time')
  duration: Date;

  @Column()
  director: string;

  @Column()
  age_rating: string;

  @Column({ length: 1000 })
  synopsis: string;

  @ManyToMany(() => GenreEntity)
  @JoinTable({
    name: 'movie_has_genres',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'genre_id',
      referencedColumnName: 'id',
    },
  })
  genres: GenreEntity[];
}
