import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthPeopleId, AuthPeopleEmail, AuthPeople } from '../domain';
import { AuthPeopleRepository } from '../domain/AuthPeopleRepository';
import { AuthPeopleEntity } from './typeorm/AuthPeopleEntity';
import { Repository } from 'typeorm';
import { Portfolio } from '../../Portfolio/domain/Portfolio';

@Injectable()
export class AuthPeopleTypeOrmRepository implements AuthPeopleRepository {
  constructor(
    @InjectRepository(AuthPeopleEntity)
    private readonly authPeopleRepository: Repository<AuthPeopleEntity>
  ) {}

  async findByParam(
    param: AuthPeopleId | AuthPeopleEmail
  ): Promise<Portfolio[]> {
    const authPeople = await this.authPeopleRepository.findOne({
      where: {
        authPeopleEmail: param.value,
      },
      relations: {
        portfolio: true,
      },
    });

    const portfolios = authPeople
      ? authPeople.portfolio.map(Portfolio.fromPrimitives)
      : [];
    return portfolios;
  }

  async findByEmail(email: AuthPeopleEmail): Promise<AuthPeople | null> {
    const authPeopleRecord = await this.authPeopleRepository.findOne({
      where: { authPeopleEmail: email.value },
    });

    if (!authPeopleRecord) return null;

    return AuthPeople.fromPrimitives({
      id: authPeopleRecord.id,
      authPeopleEmail: authPeopleRecord.authPeopleEmail,
      authPeoplePassword: authPeopleRecord.authPeoplePassword,
    });
  }
}
