import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountId, AccountRepository } from '../../Accounts/domain';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';
import { AccountKeyPeopleNotRemoved } from '../domain/exceptions';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';

export class AccountKeyPeopleRemover extends AccountKeyPeopleBase {
  constructor(
    private accountKeyPeopleRepository: AccountKeyPeopleRepository,
    protected accountRepository: AccountRepository,
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
