import { AccountId } from '../../Accounts/domain';
import { KeyPeopleId } from '../../KeyPeople/domain';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountKeyPeopleNotes } from '../domain/AccountKeyPeopleNotes';
import { AccountKeyPeopleNotUpdated } from '../domain/exceptions/AccountKeyPeopleNotUpdated';

export class AccountKeyPeopleUpdaterImportance {
  constructor(private repositoryAccountKeyPeople: AccountKeyPeopleRepository) {}

  async run(
    accountIdParam: string,
    keyPeopleIdParam: string,
    note: string
  ): Promise<void> {
    const accountId = new AccountId(accountIdParam);
    const keyPeopleId = new KeyPeopleId(keyPeopleIdParam);
    const accountKeyPeopleNotes = new AccountKeyPeopleNotes(note);

    const isUpdated = await this.repositoryAccountKeyPeople.update(
      accountId,
      keyPeopleId,
      accountKeyPeopleNotes
    );

    if (!isUpdated) {
      throw new AccountKeyPeopleNotUpdated(
        accountId,
        keyPeopleId,
        accountKeyPeopleNotes
      );
    }
  }
}
