import { Uuid } from './../../Shared/domain/value-object/Uuid';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import {
  AccountKeyPeople,
  AccountKeyPeoplePrimitiveType,
} from '../domain/AccountKeyPeople';
import { AccountKeyPeopleBase } from './AccountKeyPeopleBase';
import { AccountId, AccountRepository } from '../../Accounts/domain';
import { KeyPeopleId, KeyPeopleRepository } from '../../KeyPeople/domain';
import { Inject } from '@nestjs/common';

export class AccountKeyPeopleCreator extends AccountKeyPeopleBase {
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
