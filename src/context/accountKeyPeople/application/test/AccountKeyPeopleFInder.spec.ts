import { AccountKeyPeopleRepositoryMock } from '../../infrastructure/_mocks_/AccountKeyPeopleRepositoryMock';
import { AccountKeyPeopleFinderAll } from '../AccountKeyPeopleFinderAll';

describe('AccountKeyPeopleFinderAll', () => {
  let repository: AccountKeyPeopleRepositoryMock;
  let finder: AccountKeyPeopleFinderAll;

  beforeEach(() => {
    repository = new AccountKeyPeopleRepositoryMock();
    finder = new AccountKeyPeopleFinderAll(repository);
  });

  it('should search account key people on repository', async () => {
    await finder.run();
    repository.assertFindHaveBeenCalled();
  });
});
