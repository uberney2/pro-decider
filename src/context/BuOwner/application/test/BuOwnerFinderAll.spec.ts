import { BuOwnerFinderAll } from '../BuOwnerFinderAll';
import { BuOwnerRepositoryMock } from '../../infrastructure/__mocks__/BuOwnerRepositoryMock';

describe('BuOwner FinderAll', () => {
  let repository: BuOwnerRepositoryMock;
  let finderAll: BuOwnerFinderAll;

  beforeEach(() => {
    repository = new BuOwnerRepositoryMock();
    finderAll = new BuOwnerFinderAll(repository);
  });

  it('should call findAll on repository', async () => {
    await finderAll.run();
    repository.assertFindAllHaveBeenCalled();
  });
});
