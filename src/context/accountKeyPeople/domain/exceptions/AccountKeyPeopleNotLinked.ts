import { AccountId } from '../../../Accounts/domain';
import { KeyPeopleId } from '../../../KeyPeople/domain';

export class AccountKeyPeopleNotLinked extends Error {
  constructor(accountId: AccountId, keyPeopleId: KeyPeopleId) {
    super(
      `Unable to link the records: Account <'${accountId.value}'> and KeyPeople <'${keyPeopleId.value}'>`
    );
  }
}
