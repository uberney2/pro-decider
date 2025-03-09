import { AccountRepository } from '../domain/AccountRepository';
import { AccountWithKeyPeople } from '../domain/AccountWithKeyPeople';

export class AccountFinderAll {
  constructor(private respositoryAccount: AccountRepository) {}

  run(): Promise<Array<AccountWithKeyPeople>> {
    return this.respositoryAccount.findAll() as Promise<
      Array<AccountWithKeyPeople>
    >;
  }
}
