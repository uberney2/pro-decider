import {
  AccountKeyPeople,
  AccountKeyPeopleId,
  AccountKeyPeopleNotes,
} from '../../../../accountKeyPeople/domain';
import { AccountId } from '../../../../Accounts/domain';
import { KeyPeopleId } from '../../../../KeyPeople/domain';
import { AccountKeyPeoplePrimitiveType } from '../../../../accountKeyPeople/domain/AccountKeyPeople';
import { AccountIdMother } from '../Accounts/AccountIdMother';
import { KeyPeopleIdMother } from '../KeyPeople/KeyPeopleIdMother';
import { AccountKeyPeopleNotesMother } from './AccountKeyPeopleNotesMother';
import { AccountKeyPeopleIdMother } from './AccountKeyPeopleIdMother';

type FromFieldsParam = {
  id?: AccountKeyPeopleId;
  accountId?: AccountId;
  keyPeopleId?: KeyPeopleId;
  notes?: AccountKeyPeopleNotes;
};
export class AccountKeyPeopleMother {
  static create(
    id: AccountKeyPeopleId,
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    notes: AccountKeyPeopleNotes
  ): AccountKeyPeople {
    return new AccountKeyPeople(id, accountId, keyPeopleId, notes);
  }

  static fromRequest(
    accountKeyPeopleCreator: AccountKeyPeoplePrimitiveType
  ): AccountKeyPeople {
    return AccountKeyPeople.fromPrimitives(accountKeyPeopleCreator);
  }

  static random(): AccountKeyPeople {
    return this.create(
      AccountKeyPeopleIdMother.random(),
      AccountIdMother.random(),
      KeyPeopleIdMother.random(),
      AccountKeyPeopleNotesMother.random()
    );
  }

  static fromFields(param: FromFieldsParam) {
    const { id, accountId, keyPeopleId, notes } = param;

    return new AccountKeyPeople(
      id || AccountKeyPeopleIdMother.random(),
      accountId || AccountIdMother.random(),
      keyPeopleId || KeyPeopleIdMother.random(),
      notes || AccountKeyPeopleNotesMother.random()
    );
  }
}
