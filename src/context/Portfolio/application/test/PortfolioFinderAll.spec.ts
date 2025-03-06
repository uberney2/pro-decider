import { PortfolioFinderAll } from '../PortfolioFinderAll';
import { PortfolioRepositoryMock } from '../../infrastructure/_mocks_/PortfolioRepositoryMock';

describe('Portfolio FinderAll', () => {
  let repository: PortfolioRepositoryMock;
  let finderAll: PortfolioFinderAll;

  beforeEach(() => {
    repository = new PortfolioRepositoryMock();
    finderAll = new PortfolioFinderAll(repository);
  });

  it('should call findAll on repository', async () => {
    await finderAll.run();
    repository.assertFindAllHaveBeenCalled();
  });
});
