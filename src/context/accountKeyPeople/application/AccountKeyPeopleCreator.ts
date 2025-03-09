import { Uuid } from './../../Shared/domain/value-object/Uuid';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import {
  AccountKeyPeople,
  AccountKeyPeoplePrimitiveType,
} from '../domain/AccountKeyPeople';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';
import { AccountId, AccountRepository } from '../../Accounts/domain';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';

export class AccountKeyPeopleCreator extends AccountKeyPeopleBase {
  constructor(
    private accountKeyPeopleRepository: AccountKeyPeopleRepository,
    protected accountRepository: AccountRepository,
    protected keyPeopleRepository: KeyPeopleRepository
  ) {
    super(accountRepository, keyPeopleRepository);
  }

  async run(
    accountKeyPeopleRequest: AccountKeyPeoplePrimitiveType
  ): Promise<AccountKeyPeople> {
    const accountId = new AccountId(accountKeyPeopleRequest.accountId);
    const keyPeople = new KeyPeopleId(accountKeyPeopleRequest.keyPeopleId);
    await this.ensureAccountExists(accountId);
    await this.ensureKeyPeopleRecordExists(keyPeople);
    const newAccountKeyPeople = AccountKeyPeople.fromPrimitives({
      ...accountKeyPeopleRequest,
      id: Uuid.random().value,
    });
    return this.accountKeyPeopleRepository.insert(newAccountKeyPeople);
  }
}
