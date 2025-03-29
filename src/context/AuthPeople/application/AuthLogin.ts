import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './AuthLoginRequest';
import { AuthPeople } from '../domain/AuthPeople';
import { AuthPeopleRepository } from '../domain/AuthPeopleRepository';
import { AuthPeopleEmail } from '../domain';


@Injectable()
export class AuthLogin {
  constructor(
    @Inject('AuthPeopleRepository')
    private readonly authPeopleRepository: AuthPeopleRepository,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<AuthPeople | null> {

    const accountPeopleUser = new AuthPeopleEmail(email);
    const authPerson = await this.authPeopleRepository.findByEmail(accountPeopleUser);
    if (authPerson && authPerson.authPeoplePassword.value === password) {
      return authPerson;
    }
    return null;
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const authPerson = await this.validateUser(email, password);
    if (!authPerson) {
      throw new UnauthorizedException('wrong credentials');
    }
    const payload = { sub: authPerson.id.value, email: authPerson.authPeopleEmail.value };
    return {
      access_token: this.jwtService.sign(payload),
      authEmail: authPerson.authPeopleEmail.value,
      authId: authPerson.id.value,
      portfolio: authPerson.portfolio.toPrimitives()
    };
  }
}