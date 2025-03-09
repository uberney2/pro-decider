import { AccountId, AccountRepository } from '../../Accounts/domain';
import {
  KeyPeopleRepository,
  KeyPeopleWithNotes,
} from '../../KeyPeople/domain';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';

export class KeyPeopleGetterByAccount extends AccountKeyPeopleBase {
  constructor(
    private repositoryAccountKeyPeople: AccountKeyPeopleRepository,
    protected accountRepository: AccountRepository,
    protected keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountRepository, keyPeopleRepository);
  }

  async run(accountIdParam: string): Promise<KeyPeopleWithNotes[]> {
    const accountId = new AccountId(accountIdParam);

    await this.ensureAccountExists(accountId);

    return await this.repositoryAccountKeyPeople.findKeyPeopleByAccountId(
      accountId
    );
  }
}
