import { PortfolioIdMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioIdMother';
import { PortfolioId } from '../PortfolioId';

describe('Portfolio Id', () => {
  it('should create id when valid uuid is provided', () => {
    const id = PortfolioIdMother.random().value;
    const idObject = new PortfolioId(id);
    expect(idObject.value).toEqual(id);
  });
  it('should throw an error when invalid uuid is provided', () => {
    const idObject = () => PortfolioIdMother.invalidId();
    expect(idObject).toThrowError();
  });
});
