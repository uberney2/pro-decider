import { Account } from '../domain/Account';
import { AccountCreatorRequest } from './AccountCreatorRequest';
import { AccountRepository, exceptions } from '../domain';

export class AccountCreator {
  constructor(private accountRepository: AccountRepository) {}

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
