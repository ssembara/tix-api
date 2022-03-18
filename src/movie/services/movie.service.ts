import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { storeMoviesDto } from '../dtos/store-movie.dto';
import { MovieEntity } from '../entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private _movieRepository: Repository<MovieEntity>,
  ) {}
  async getMovies(): Promise<MovieEntity[]> {
    const movies = await this._movieRepository.find({
      relations: ['genres'],
    });
    return movies;
  }

  async getById(id: number): Promise<MovieEntity> {
    const movies = this._movieRepository.findOne(id);
    if (!Object.keys(movies).length) {
      throw new NotFoundException('book not found');
      // throw new HttpException(
      //   {
      //     status: HttpStatus.FORBIDDEN,
      //     error: 'This is a custom message',
      //   },
      //   HttpStatus.FORBIDDEN,
      // );
    }
    return movies;
  }

  async storeMovies(_moviesData: storeMoviesDto): Promise<MovieEntity> {
    this._movieRepository.create(_moviesData);
    const movie = this._movieRepository.save(_moviesData);
    return movie;
  }

  async updateMovies(
    id: number,
    _moviesData: storeMoviesDto,
  ): Promise<storeMoviesDto> {
    await this._movieRepository.update(id, _moviesData);
    return _moviesData;
  }

  async destroyMovies(id: number): Promise<any> {
    const movies = await this._movieRepository.delete(id);
    return movies;
  }
}
