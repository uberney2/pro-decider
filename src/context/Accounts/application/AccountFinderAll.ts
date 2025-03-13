import { Inject } from '@nestjs/common';
import { AccountRepository } from '../domain/AccountRepository';
import { AccountWithKeyPeople } from '../domain/AccountWithKeyPeople';

export class AccountFinderAll {
  constructor(
    @Inject('AccountRepository')
    private readonly respositoryAccount: AccountRepository
  ) {}

  run(): Promise<Array<AccountWithKeyPeople>> {
    return this.respositoryAccount.findAll() as Promise<
      Array<AccountWithKeyPeople>
    >;
  }
}
