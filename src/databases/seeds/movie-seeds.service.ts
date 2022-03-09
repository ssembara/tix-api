import { GenreEntity } from 'src/genre/entities/genre.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieSeedService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
    @InjectRepository(MovieEntity)
    private movieRepository: Repository<MovieEntity>,
  ) {}

  async seed(): Promise<void> {
    const genres1 = this.genreRepository.create({
      name: 'Drama',
    });
    await this.genreRepository.save(genres1);

    const genres2 = this.genreRepository.create({
      name: 'Romance',
    });
    await this.genreRepository.save(genres2);

    const movies = this.movieRepository.create({
      title: 'Garis Waktu',
      duration: '00:01:40',
      director: 'Jeihan Angga',
      age_rating: 'R 13+',
      synopsis:
        "April, who likes to write poetry, meets Senandika, a musician who has managed to steal attention with her philosophy and principles. April, seeing potential in Sena, Introduces her to Sanya, her best friend's",
      // genres: [genres1, genres2],
    });

    await this.movieRepository.save(movies);
  }
}
