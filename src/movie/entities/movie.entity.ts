import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
