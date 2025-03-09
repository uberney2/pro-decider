import { AccountNameMother } from '../../../Shared/domain/mother-creators/Accounts/AccountNameMother';
import { AccountName } from '../AccountName';
describe('account name', () => {
  it('should create a name object if the name value is not empty', () => {
    const name = AccountNameMother.random().value;
    const nameObject = new AccountName(name);
    expect(nameObject.value).toEqual(name);
  });
});
