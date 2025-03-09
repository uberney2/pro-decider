import { AccountId, AccountRepository } from '../../Accounts/domain';
import { AccountNotFound } from '../../Accounts/domain/exceptions';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';
import { KeyPeopleNotFound } from '../../KeyPeople/domain/exceptions';

export class AccountKeyPeopleBase {
  constructor(
    protected accountRepository: AccountRepository,
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
