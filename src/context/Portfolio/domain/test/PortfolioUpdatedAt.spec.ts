import { PortfolioUpdatedAtMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioUpdatedAtMother';
import { PortfolioUpdatedAt } from '../PortfolioUpdatedAt';

describe('Portfolio UpdatedAt', () => {
  it('should update a updatedAt field when date is provided', () => {
    const date = PortfolioUpdatedAtMother.random().value;
    const dateObject = new PortfolioUpdatedAt(date);
    expect(date).toEqual(dateObject.value);
  });
});
