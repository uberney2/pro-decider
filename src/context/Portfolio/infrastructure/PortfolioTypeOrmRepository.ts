import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Portfolio } from '../domain';
import { PortfolioRepository } from '../domain/PortfolioRepository';
import { PortfolioEntity } from './typeorm/PortfolioEntity';

@Injectable()
export class PortfolioTypeOrmRepository implements PortfolioRepository {
  constructor(
    @InjectRepository(PortfolioEntity)
    private readonly portfolioEntityRepository: Repository<PortfolioEntity>
  ) {}

  async findAll(): Promise<Portfolio[]> {
    const searchResult = await this.portfolioEntityRepository.find();
    return searchResult.map<Portfolio>(Portfolio.fromPrimitives);
  }

  async insert(portfolio: Portfolio): Promise<Portfolio> {
    const portfolioEntity = this.toEntity(portfolio);
    await this.portfolioEntityRepository.insert(portfolioEntity);
    return portfolio;
  }

  private toEntity(keyPeople: Portfolio): PortfolioEntity {
    const entity = new PortfolioEntity();

    entity.id = keyPeople.id.value;
    entity.name = keyPeople.name.value;

    return entity;
  }
}
