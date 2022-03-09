import databaseConfig from 'src/common/config/database.config';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import { MovieEntity } from 'src/movie/entities/movie.entity';
import { OrderEntity } from 'src/order/entities/order.entity';

module.exports = {
  host: databaseConfig().host,
  type: 'mysql',
  port: databaseConfig().port,
  username: databaseConfig().username,
  password: databaseConfig().password,
  database: databaseConfig().database,
  syncronize: false,
  entities: [GenreEntity, MovieEntity, OrderEntity],
  migrations: ['src/databases/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/databases/migrations',
  },
};
