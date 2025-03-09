import { KeyPeopleRepositoryMock } from '../../infrastructure/__mocks__/KeyPeopleRepositoryMock';
import { KeyPeopleFinder } from '../KeyPeopleFinder';
describe('KeyPeopleFinder', () => {
  let repository: KeyPeopleRepositoryMock;
  let finder: KeyPeopleFinder;

  beforeEach(() => {
    repository = new KeyPeopleRepositoryMock();
    finder = new KeyPeopleFinder(repository);
  });
  it('should search key people on repository', async () => {
    await finder.run();

    repository.assertFindHaveBeenCalled();
  });
});
