import { PortfolioRepository } from '../domain/PortfolioRepository';
import { Portfolio } from '../domain/Portfolio';

export class PortfolioFinderAll {
  constructor(private repositoryPortfolio: PortfolioRepository) {}

  run(): Promise<Array<Portfolio>> {
    return this.repositoryPortfolio.findAll();
  }
}
