import { PortfolioCreator } from '../PortfolioCreator';
import { PortfolioMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioMother';
import { PortfolioRepositoryMock } from '../../infrastructure/_mocks_/PortfolioRepositoryMock';
import { PortfolioIdMother } from '../../../Shared/domain/mother-creators/Portfolio/PortfolioIdMother';

describe('Portfolio Creator', () => {
  let repository: PortfolioRepositoryMock;
  let creator: PortfolioCreator;

  beforeEach(() => {
    repository = new PortfolioRepositoryMock();
    creator = new PortfolioCreator(repository);
  });

  it('should call the repository with proper params', async () => {
    const id = PortfolioIdMother.random();
    const Portfolio = PortfolioMother.fromFields({ id });

    await creator.run(Portfolio.toPrimitives());

    repository.assertSaveHaveBeenCalledWidth(Portfolio);
  });
  it('should throw an error when Portfolio already exist', async () => {
    try {
      const id = PortfolioIdMother.random();
      const Portfolio = PortfolioMother.fromFields({ id });

      repository.populate([Portfolio]);

      await creator.run(Portfolio.toPrimitives());
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
