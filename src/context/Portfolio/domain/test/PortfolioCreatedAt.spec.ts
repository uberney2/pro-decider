import { PortfolioCreatedAtMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioCreatedAtMother';
import { PortfolioCreatedAt } from '../PortfolioCreatedAt';

describe('Portfolio CreatedAt', () => {
  it('should create a createdAt when date is provided', () => {
    const date = PortfolioCreatedAtMother.random().value;
    const dateObject = new PortfolioCreatedAt(date);
    expect(date).toEqual(dateObject.value);
  });
});
