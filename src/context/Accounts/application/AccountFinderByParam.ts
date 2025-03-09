import { AccountRepository } from '../domain/AccountRepository';
import { Account } from '../domain/Account';
import { AccountId } from '../domain/AccountId';
import { AccountName } from '../domain/AccountName';
import { AccountNotFound } from '../domain/exceptions/AccountNotFound';
import { isUuid } from '../../../../tools/functions/isUuid';

export class AccountFinderByParam {
  constructor(private repositoryAccount: AccountRepository) {}

  async run(param: string): Promise<Account> {
    if (isUuid(param)) {
      const accountId = new AccountId(param);
      const account = await this.repositoryAccount.findByParam(accountId);
      if (!account) {
        throw new AccountNotFound(accountId);
      }
      return account;
    } else {
      const accountName = new AccountName(param);
      const account = await this.repositoryAccount.findByParam(accountName);
      if (!account) {
        throw new AccountNotFound(accountName);
      }
      return account;
    }
  }
}
