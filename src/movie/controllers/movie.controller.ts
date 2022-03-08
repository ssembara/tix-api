import { MovieEntity } from '../entities/movie.entity';
import { MoviesDto } from '../dtos/store.movie.dto';
import { MovieService } from '../services/movie.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Version,
} from '@nestjs/common';

@Controller('movies')
export class MovieController {
  constructor(private _moviesService: MovieService) {}

  @Version('1')
  @Get()
  public async getMovies(): Promise<MovieEntity[]> {
    return this._moviesService.getMovies();
  }

  @Version('1')
  @Get(':id')
  getById(@Param() params): Promise<MovieEntity> {
    return this._moviesService.getById(params.id);
  }

  @Version('1')
  @Post()
  public async storeMovies(@Body() data: MoviesDto): Promise<MovieEntity> {
    return this._moviesService.storeMovies(data);
  }

  @Version('1')
  @Put(':id')
  public async updateMovies(
    @Param() params,
    @Body() data: MoviesDto,
  ): Promise<MoviesDto> {
    return this._moviesService.updateMovies(params.id, data);
  }

  @Version('1')
  @Delete(':id')
  public async destroyMovies(@Param() params): Promise<void> {
    return this._moviesService.destroyMovies(params.id);
  }
}
