import { AccountId } from '../../../Accounts/domain/AccountId';
import { KeyPeopleId } from '../../../KeyPeople/domain';
import { AccountKeyPeopleNotes } from '../AccountKeyPeopleNotes';
export class AccountKeyPeopleNotUpdated extends Error {
  constructor(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    note: AccountKeyPeopleNotes
  ) {
    super(
      `Unable to update importance: ${note} of key people with id: ${accountId} and related to account with id: ${keyPeopleId}`
    );
  }
}
