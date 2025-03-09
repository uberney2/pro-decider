import { AccountIdMother } from '../../../Shared/domain/mother-creators/Accounts/AccountIdMother';
import { AccountId } from '../AccountId';

describe('account id', () => {
  it('should throw an error if the id value is not an uuid', () => {
    const createIdObject = () => {
      AccountIdMother.invalidId();
    };
    expect(createIdObject).toThrowError();
  });

  it('should create a valid id object if it is an uuid', () => {
    const id = AccountIdMother.random().value;
    const idObject = new AccountId(id);
    expect(idObject.value).toEqual(id);
  });
});
