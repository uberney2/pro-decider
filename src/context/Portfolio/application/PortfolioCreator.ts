import { Portfolio, PortfolioPrimitiveType } from '../domain';
import { PortfolioRepository } from '../domain/PortfolioRepository';

export class PortfolioCreator {
  constructor(private repository: PortfolioRepository) {}

  async run(portfolio: PortfolioPrimitiveType): Promise<void> {
    const newPortfolio = Portfolio.fromPrimitives(portfolio);
    await this.repository.insert(newPortfolio);
  }
}
