import { GenreEntity } from './entities/genre.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([GenreEntity])],
})
export class GenreModule {}
