import { AccountKeyPeopleId } from '../../../../accountKeyPeople/domain/AccountKeyPeopleId';
import { AccountId } from '../../../../Accounts/domain/AccountId';
import { KeyPeopleId } from '../../../../KeyPeople/domain';
import { AccountKeyPeopleNotes } from '../../../../accountKeyPeople/domain/AccountKeyPeopleNotes';
import { AccountKeyPeople } from '../../../../accountKeyPeople/domain/AccountKeyPeople';
import { AccountKeyPeopleIdMother } from './AccountKeyPeopleIdMother';
import { AccountIdMother } from '../Accounts/AccountIdMother';
import { KeyPeopleIdMother } from '../KeyPeople/KeyPeopleIdMother';
import { AccountKeyPeopleNotesMother } from './AccountKeyPeopleNotesMother';
export class AccountKeyPeopleMother {
  static create(
    id: AccountKeyPeopleId,
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    notes: AccountKeyPeopleNotes
  ): AccountKeyPeople {
    return new AccountKeyPeople(id, accountId, keyPeopleId, notes);
  }

  static random(): AccountKeyPeople {
    return this.create(
      AccountKeyPeopleIdMother.random(),
      AccountIdMother.random(),
      KeyPeopleIdMother.random(),
      AccountKeyPeopleNotesMother.random()
    );
  }
}
