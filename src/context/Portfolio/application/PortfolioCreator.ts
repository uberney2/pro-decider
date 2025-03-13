import { Portfolio, PortfolioPrimitiveType } from '../domain';
import { PortfolioRepository } from '../domain/PortfolioRepository';
import { Inject } from '@nestjs/common';

export class PortfolioCreator {
  constructor(
    @Inject('PortfolioRepository')
    private repository: PortfolioRepository
  ) {}

  async run(portfolio: PortfolioPrimitiveType): Promise<void> {
    const newPortfolio = Portfolio.fromPrimitives(portfolio);
    await this.repository.insert(newPortfolio);
  }
}
