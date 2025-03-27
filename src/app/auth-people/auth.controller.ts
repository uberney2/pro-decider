import { Controller, Post, Body } from '@nestjs/common';
import { AuthLogin } from '../../context/AuthPeople/application';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authLogin: AuthLogin) {}

  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    return this.authLogin.login(loginDto);
  }
}