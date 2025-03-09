import { AccountId } from '../../../Accounts/domain';
import { KeyPeopleId } from '../../../KeyPeople/domain';

export class AccountKeyPeopleNotRemoved extends Error {
  constructor(accountId: AccountId, keyPeopleId: KeyPeopleId) {
    super(
      `Unable to unlinked the records: Account <'${accountId.value}'> and KeyPeople <'${keyPeopleId.value}'>`
    );
  }
}
