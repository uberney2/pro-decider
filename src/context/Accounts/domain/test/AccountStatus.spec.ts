import { AccountStatusMother } from '../../../Shared/domain/mother-creators/Accounts/AccountStatusMother';
import { AccountStatus } from '../AccountStatus';

describe('KeyPeople name', () => {
  it('should create a name object if the name value has 1 or more characters', () => {
    const status = AccountStatusMother.random().value;
    const statusObject = new AccountStatus(status);
    expect(statusObject.value).toEqual(status);
  });
});
