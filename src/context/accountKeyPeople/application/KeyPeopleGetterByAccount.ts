import { Inject } from '@nestjs/common';
import { AccountId, AccountRepository } from '../../Accounts/domain';
import {
  KeyPeopleRepository,
  KeyPeopleWithNotes,
} from '../../KeyPeople/domain';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';

export class KeyPeopleGetterByAccount extends AccountKeyPeopleBase {
  constructor(
    @Inject('AccountKeyPeopleRepository')
    private repositoryAccountKeyPeople: AccountKeyPeopleRepository,
    @Inject('AccountRepository')
    protected accountRepository: AccountRepository,
    @Inject('KeyPeopleRepository')
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
