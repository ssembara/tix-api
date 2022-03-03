import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MoviesDto } from '../dtos/store.movie.dto';
import { MovieEntity } from '../entities/movie.entity';
import { MovieService } from '../services/movie.service';

@Controller('movies')
export class MovieController {
  constructor(private _moviesService: MovieService) {}

  @Get()
  public async getMovies(): Promise<MovieEntity[]> {
    return this._moviesService.getMovies();
  }

  @Get(':id')
  getById(@Param() params): Promise<MovieEntity> {
    return this._moviesService.getById(params.id);
  }

  @Post()
  public async storeMovies(@Body() data: MoviesDto): Promise<MovieEntity> {
    return this._moviesService.storeMovies(data);
  }

  @Put(':id')
  public async updateMovies(
    @Param() params,
    @Body() data: MoviesDto,
  ): Promise<MoviesDto> {
    return this._moviesService.updateMovies(params.id, data);
  }

  @Delete(':id')
  public async destroyMovies(@Param() params): Promise<void> {
    return this._moviesService.destroyMovies(params.id);
  }
}
