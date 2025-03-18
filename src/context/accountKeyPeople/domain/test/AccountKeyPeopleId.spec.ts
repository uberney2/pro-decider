import { AccountKeyPeopleIdMother } from '../../../Shared/domain/mother-creators/accountKeyPeople/AccountKeyPeopleIdMother';
import { AccountKeyPeopleId } from '../AccountKeyPeopleId';
describe('AccountKeyPeople id', () => {
  it('should create a valid id object if it is an uuid', () => {
    const id = AccountKeyPeopleIdMother.random().value;
    const idObject = new AccountKeyPeopleId(id);
    expect(idObject.value).toEqual(id);
  });

  it('should throw an error if the id value is not an uuid', () => {
    const IdObject = () => {
      AccountKeyPeopleIdMother.invalidId();
    };
    expect(IdObject).toThrowError();
  });
});
