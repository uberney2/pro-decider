import { AccountIdMother } from '../../../Shared/domain/mother-creators/Accounts/AccountIdMother';
import { AccountMother } from '../../../Shared/domain/mother-creators/Accounts/AccountMother';
import { AccountId } from '../../domain';
import { AccountRepositoryMock } from '../../infrastructure/_mocks_/AccountRepositoryMock';
import { AccountFinderByParam } from '../AccountFinderByParam';
describe('AccountFinderByParam', () => {
  let repository: AccountRepositoryMock;
  let finderByParam: AccountFinderByParam;

  beforeEach(() => {
    repository = new AccountRepositoryMock();
    finderByParam = new AccountFinderByParam(repository);
  });
  it('should search on key people by id on repository', async () => {
    const id: AccountId = AccountIdMother.random();
    repository.populate([AccountMother.fromFields({ id })]);
    await finderByParam.run(id.value);
    repository.assertFindByParamHaveBeenCalled();
  });
});
