import { AccountRepository } from '../domain/AccountRepository';
import { AccountWithKeyPeople } from '../domain/AccountWithKeyPeople';
import { PortfolioId } from '../../Portfolio/domain/PortfolioId';
import { Inject } from '@nestjs/common';

export class AccountFinderAllByPortfolioId {
  constructor(
      @Inject('AccountRepository')
      private readonly respositoryAccount: AccountRepository
    ) {}

  async run(param: string): Promise<Array<AccountWithKeyPeople>> {
    const portfolioId = new PortfolioId(param);
    const accounts = this.respositoryAccount.findAllByPortfolioId(
      portfolioId
    ) as Promise<Array<AccountWithKeyPeople>>;
    return accounts;
  }
}
