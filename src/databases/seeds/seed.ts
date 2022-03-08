import { MovieSeedService } from './movie-seeds.service';
import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';

async function bootstrap() {
  const appContext = await NestFactory.createApplicationContext(SeedModule);
  const movieSeeder = appContext.get(MovieSeedService);
  await movieSeeder.seed();

  await appContext.close();
}

bootstrap();
