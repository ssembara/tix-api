import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class storeMoviesDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  duration: Date;

  @IsString()
  @IsNotEmpty()
  director: string;

  @Expose({ name: 'age_rating' })
  ageRating: string;

  @IsString()
  @IsNotEmpty()
  synopsis: string;
}
