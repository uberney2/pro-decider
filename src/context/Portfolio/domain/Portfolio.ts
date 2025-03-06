import { PortfolioCreatedAt } from './PortfolioCreatedAt';
import { PortfolioId } from './PortfolioId';
import { PortfolioName } from './PortfolioName';
import { PortfolioUpdatedAt } from './PortfolioUpdatedAt';

export type PortfolioPrimitiveType = {
  id: string;
  name: string;
};

export class Portfolio {
  id: PortfolioId;
  name: PortfolioName;

  constructor(
    id: PortfolioId,
    name: PortfolioName,
    createdAt?: PortfolioCreatedAt,
    updatedAt?: PortfolioUpdatedAt
  ) {
    this.id = id;
    this.name = name;
  }

  static fromPrimitives(plainData: PortfolioPrimitiveType): Portfolio {
    return new Portfolio(
      new PortfolioId(plainData.id),
      new PortfolioName(plainData.name),
    );
  }

  toPrimitives(): PortfolioPrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
    };
  }
}
