import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoleEnum } from 'src/common/config/role.enum';
import { UserEntity } from 'src/user/entities/user.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async seed(): Promise<void> {
    await this.userRepository.clear();
    const user = this.userRepository.create({
      username: 'user',
      password: 'user123',
      email: 'user@gmail.com',
      role: RoleEnum.User,
    });
    const admin = this.userRepository.create({
      username: 'admin',
      password: 'admin123',
      email: 'admin@gmail.com',
      role: RoleEnum.Admin,
    });
    await Promise.all([
      this.userRepository.save(user),
      this.userRepository.save(admin),
    ]);
  }
}
