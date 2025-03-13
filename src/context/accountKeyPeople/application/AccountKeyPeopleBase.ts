import { AccountId, AccountRepository } from '../../Accounts/domain';
import { AccountNotFound } from '../../Accounts/domain/exceptions';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';
import { KeyPeopleNotFound } from '../../KeyPeople/domain/exceptions';
import { Inject } from '@nestjs/common';

export class AccountKeyPeopleBase {
  constructor(
    @Inject('AccountRepository')
    protected accountRepository: AccountRepository,

    @Inject('KeyPeopleRepository')
    protected keyPeopleRepository: KeyPeopleRepository
  ) {}

  protected async ensureAccountExists(accountId: AccountId) {
    const accountFound = await this.accountRepository.findByParam(accountId);

    if (!accountFound) {
      throw new AccountNotFound(accountId);
    }
  }

  protected async ensureKeyPeopleRecordExists(keyPeopleId: KeyPeopleId) {
    const keyPeopleFound = await this.keyPeopleRepository.findById(keyPeopleId);

    if (!keyPeopleFound) {
      throw new KeyPeopleNotFound(keyPeopleId);
    }
  }
}
