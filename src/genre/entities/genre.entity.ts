import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'genres' })
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
