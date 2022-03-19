import { MovieEntity } from '../entities/movie.entity';
import { storeMoviesDto } from '../dtos/store-movie.dto';
import { MovieService } from '../services/movie.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Version,
} from '@nestjs/common';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorator';
import { RoleEnum } from 'src/common/config/role.enum';

@UseGuards(RolesGuard)
@Controller('movies')
export class MovieController {
  constructor(private _moviesService: MovieService) {}

  @Roles(RoleEnum.User)
  @Version('1')
  @Get()
  public async getMovies(): Promise<MovieEntity[]> {
    return this._moviesService.getMovies();
  }

  @Roles(RoleEnum.User)
  @Version('1')
  @Get(':id')
  getById(@Param() params): Promise<MovieEntity> {
    return this._moviesService.getById(params.id);
  }

  @UseGuards(RolesGuard)
  @Roles(RoleEnum.Admin)
  @Version('1')
  @Post()
  public async storeMovies(@Body() data: storeMoviesDto): Promise<MovieEntity> {
    return this._moviesService.storeMovies(data);
  }

  @Version('1')
  @Put(':id')
  public async updateMovies(
    @Param() params,
    @Body() data: storeMoviesDto,
  ): Promise<storeMoviesDto> {
    return this._moviesService.updateMovies(params.id, data);
  }

  @Version('1')
  @Delete(':id')
  public async destroyMovies(@Param() params): Promise<void> {
    return this._moviesService.destroyMovies(params.id);
  }
}
