import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountId, AccountRepository } from '../../Accounts/domain';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';
import { AccountKeyPeopleNotRemoved } from '../domain/exceptions';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';
import { Inject } from '@nestjs/common';

export class AccountKeyPeopleRemover extends AccountKeyPeopleBase {
  constructor(
    @Inject('AccountKeyPeopleRepository')
    private accountKeyPeopleRepository: AccountKeyPeopleRepository,

    @Inject('AccountRepository')
    protected accountRepository: AccountRepository,

    @Inject('KeyPeopleRepository')
    protected keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountRepository, keyPeopleRepository);
  }

  async run(accountIdParam: string, keyPeopleIdParam: string): Promise<void> {
    const accountId = new AccountId(accountIdParam);
    const keyPeopleId = new KeyPeopleId(keyPeopleIdParam);

    await this.ensureAccountExists(accountId);
    await this.ensureKeyPeopleRecordExists(keyPeopleId);

    const isRemoved = await this.accountKeyPeopleRepository.remove(
      accountId,
      keyPeopleId
    );

    if (!isRemoved) {
      throw new AccountKeyPeopleNotRemoved(accountId, keyPeopleId);
    }
  }
}
