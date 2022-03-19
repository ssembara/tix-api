import { Controller, Post, Request, UseGuards, Version } from '@nestjs/common';
import { PublicGuard } from 'src/common/decorators/public.guard';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../guards/local-auth-guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @PublicGuard()
  @Version('1')
  @Post('login')
  async login(@Request() req) {
    console.log(req.user, 'log login');

    return this.authService.login(req.user);
  }
}
