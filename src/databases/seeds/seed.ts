import { MovieSeeder } from './services/movie.seeder';
import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { UserSeeder } from './services/user.seeder';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeedModule);
  const movieSeeder = appContext.get(MovieSeeder);
  const userSeeder = appContext.get(UserSeeder);
  await movieSeeder.seed();
  await userSeeder.seed();

  await appContext.close();
}

bootstrap();
