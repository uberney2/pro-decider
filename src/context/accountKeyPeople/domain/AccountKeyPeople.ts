import { Account } from '../../Accounts/domain';
import { AccountId } from '../../Accounts/domain/AccountId';
import { KeyPeople } from '../../KeyPeople/domain';
import { KeyPeopleId } from '../../KeyPeople/domain/KeyPeopleId';
import { AccountKeyPeopleId } from './AccountKeyPeopleId';
import { AccountKeyPeopleNotes } from './AccountKeyPeopleNotes';

export type AccountKeyPeoplePrimitiveType = {
  id: string;
  accountId: string;
  keyPeopleId: string;
  notes: string;
};
export class AccountKeyPeople {
  id: AccountKeyPeopleId;
  accountId: AccountId;
  account: Account;
  keyPeopleId: KeyPeopleId;
  keyPeople: KeyPeople;
  notes: AccountKeyPeopleNotes;

  constructor(
    id: AccountKeyPeopleId,
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    notes: AccountKeyPeopleNotes
  ) {
    this.id = id;
    this.accountId = accountId;
    this.keyPeopleId = keyPeopleId;
    this.notes = notes;
  }

  static fromPrimitives(
    plainData: AccountKeyPeoplePrimitiveType
  ): AccountKeyPeople {
    return new AccountKeyPeople(
      new AccountKeyPeopleId(plainData.id),
      new AccountId(plainData.accountId),
      new KeyPeopleId(plainData.keyPeopleId),
      new AccountKeyPeopleNotes(plainData.notes)
    );
  }

  toPrimitives(): AccountKeyPeoplePrimitiveType {
    return {
      id: this.id.value,
      accountId: this.accountId.value,
      keyPeopleId: this.keyPeopleId.value,
      notes: this.notes.value,
    };
  }

  setAccount(account: Account) {
    this.account = account;
  }

  setKeyPeople(keyPeople: KeyPeople) {
    this.keyPeople = keyPeople;
  }
}
