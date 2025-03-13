import { Account } from '../domain';
import { AccountRepository } from '../domain/AccountRepository';
import { AccountCreatorRequest } from './AccountCreatorRequest';
import { AccountNotUpdated } from '../domain/exceptions/AccountNotUpdated';
import { Inject } from '@nestjs/common';

export class AccountUpdater {
  constructor(
    @Inject('AccountRepository')
    private readonly accountRepository: AccountRepository
  ) {}

  async run(accountRequest: AccountCreatorRequest): Promise<Account> {
    const accountObject = Account.fromPrimitives(accountRequest);
    const isUpdated = await this.accountRepository.update(accountObject);
    if (!isUpdated) {
      throw new AccountNotUpdated(accountObject.id);
    }
    return await this.accountRepository.findByParam(accountObject.id);
  }
}
