import { PortfolioRepository } from '../domain/PortfolioRepository';
import { Portfolio } from '../domain/Portfolio';
import { Inject } from '@nestjs/common';

export class PortfolioFinderAll {
  constructor(
    @Inject('PortfolioRepository')
    private readonly repositoryPortfolio: PortfolioRepository
  ) {}

  run(): Promise<Array<Portfolio>> {
    return this.repositoryPortfolio.findAll();
  }
}
