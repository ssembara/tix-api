import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MovieSeedService {
  constructor(
    @InjectRepository(MovieEntity)
    private movieRepository: Repository<MovieEntity>,
  ) {}

  async seed(): Promise<void> {
    const movies = this.movieRepository.create({
      title: 'Garis Waktu',
      duration: '00:01:40',
      director: 'Jeihan Angga',
      age_rating: 'R 13+',
      synopsis:
        "April, who likes to write poetry, meets Senandika, a musician who has managed to steal attention with her philosophy and principles. April, seeing potential in Sena, Introduces her to Sanya, her best friend's",
    });

    await this.movieRepository.save(movies);
  }
}
