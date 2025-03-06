import { PortfolioNameMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioNameMother';
import { PortfolioName } from '../PortfolioName';

describe('Portfolio Name', () => {
  it('should create a name when valid name is provided', () => {
    const name = PortfolioNameMother.random().value;
    const nameObject = new PortfolioName(name);
    expect(name).toEqual(nameObject.value);
  });
  it('should throw an error when invalid name is provided', () => {
    const nameObject = () => PortfolioNameMother.invalidName();
    expect(nameObject).toThrowError();
  });
});
