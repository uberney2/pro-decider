import { AccountKeyPeopleIdMother } from '../../../Shared/domain/mother-creators/accountKeyPeople/AccountKeyPeopleIdMother';
import { AccountKeyPeopleNotesMother } from '../../../Shared/domain/mother-creators/accountKeyPeople/AccountKeyPeopleNotesMother';
import { AccountIdMother } from '../../../Shared/domain/mother-creators/Accounts/AccountIdMother';
import { KeyPeopleIdMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleIdMother';
import { AccountKeyPeople } from '../AccountKeyPeople';
describe('AccountKeyPeople', () => {
  it('should create a account key people domain entity when all of its property rules are fulfilled', () => {
    const id = AccountKeyPeopleIdMother.random();
    const note = AccountKeyPeopleNotesMother.random();
    const idAccount = AccountIdMother.random();
    const idKeyPeople = KeyPeopleIdMother.random();
    let accountKeyPeople: AccountKeyPeople;
    try {
      accountKeyPeople = new AccountKeyPeople(id, idAccount, idKeyPeople, note);
    } catch (error) {
      console.log(error);
    }
    expect(accountKeyPeople).toBeDefined();
  });
});
