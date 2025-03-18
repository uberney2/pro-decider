import { Account } from '../domain/Account';
import { AccountCreatorRequest } from './AccountCreatorRequest';
import { AccountRepository, exceptions } from '../domain';
import { Inject } from '@nestjs/common';

export class AccountCreator {
  constructor(
    @Inject('AccountRepository')
    private readonly accountRepository: AccountRepository
  ) {}

  async run(accountRequest: AccountCreatorRequest): Promise<Account> {
    const newAccount = Account.fromPrimitives(accountRequest);

    const existingAccount = await this.accountRepository.findByParam(
      newAccount.id
    );

    if (existingAccount) {
      throw new exceptions.AccountAlreadyExists(newAccount);
    }

    return this.accountRepository.insert(newAccount);
  }
}
