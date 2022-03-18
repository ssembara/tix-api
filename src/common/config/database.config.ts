import { GenreEntity } from 'src/genre/entities/genre.entity';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { registerAs } from '@nestjs/config';
import { UserEntity } from 'src/user/entities/user.entity';

export default registerAs('database', () => ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  syncronize: false,
  entities: [UserEntity, GenreEntity, MovieEntity, OrderEntity],
}));
