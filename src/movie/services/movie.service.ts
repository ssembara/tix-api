import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MoviesDto } from '../dtos/store.movie.dto';
import { MovieEntity } from '../entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private _movieRepository: Repository<MovieEntity>,
  ) {}
  async getMovies(): Promise<MovieEntity[]> {
    const movies = await this._movieRepository.find();
    return movies;
  }

  async getById(id: number): Promise<MovieEntity> {
    return this._movieRepository.findOne(id);
  }

  async storeMovies(_moviesData: MoviesDto): Promise<MovieEntity> {
    this._movieRepository.create(_moviesData);
    const movie = this._movieRepository.save(_moviesData);
    return movie;
  }

  async updateMovies(id: number, _moviesData: MoviesDto): Promise<MoviesDto> {
    await this._movieRepository.update(id, _moviesData);
    return _moviesData;
  }

  async destroyMovies(id: number): Promise<any> {
    const movies = await this._movieRepository.delete(id);
    return movies;
  }
}
