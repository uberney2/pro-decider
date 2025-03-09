import { AccountId } from '../AccountId';
import { AccountMother } from '../../../Shared/domain/mother-creators/Accounts/AccountMother';
describe('account', () => {
  it('should create a account when all of its property rules are fulfilled', () => {
    const id = AccountId.random();
    const accountCreated = AccountMother.fromFields({ id });
    expect(accountCreated.id.value).toBe(id.value);
  });
});
