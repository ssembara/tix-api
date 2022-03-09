import databaseConfig from 'src/common/config/database.config';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import { Module } from '@nestjs/common';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { MovieSeedService } from './movie-seeds.service';
import { TypeOrmModule } from '@nestjs/typeorm';

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
    TypeOrmModule.forFeature([GenreEntity, MovieEntity]),
  ],

  providers: [MovieSeedService],
})
export class SeedModule {}
