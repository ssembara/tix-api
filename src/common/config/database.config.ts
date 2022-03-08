import { MovieEntity } from 'src/movie/entities/movie.entity';
import { OrderEntity } from 'src/order/entities/order.entity';
import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  type: 'mysql',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  syncronize: false,
  entities: [MovieEntity, OrderEntity],
}));