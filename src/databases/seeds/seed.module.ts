import databaseConfig from 'src/common/config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import { Module } from '@nestjs/common';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { MovieSeeder } from './services/movie-seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserSeeder } from './services/user-seed.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const options = configService.get('database');

        return options;
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forFeature([GenreEntity, MovieEntity, UserEntity]),
  ],

  providers: [MovieSeeder, UserSeeder],
})
export class SeedModule {}
