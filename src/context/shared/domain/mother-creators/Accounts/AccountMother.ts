import {
  Account,
  AccountPrimitiveType,
} from '../../../../Accounts/domain/Account';
import {
  AccountId,
  AccountName,
  AccountPcsLink,
  AccountSalesforceLink,
  AccountStatus,
  AccountStrategy,
} from '../../../../Accounts/domain';
import { AccountIdMother } from './AccountIdMother';
import { AccountNameMother } from './AccountNameMother';
import { AccountStatusMother } from './AccountStatusMother';
import { AccountSalesforceLinkMother } from './AccountSalesforceLinkMother';
import { AccountPcsLinkMother } from './AccountPcsLinkMother';
import { AccountStrategyMother } from './AccountStrategyMother';
import { BuOwner } from '../../../../BuOwner';
import { Portfolio } from '../../../../Portfolio';

export class AccountMother {
  static create(
    id: AccountId,
    name: AccountName,
    buOwner: BuOwner,
    portfolio: Portfolio,
    status: AccountStatus,
    salesforceLink?: AccountSalesforceLink,
    pcsLink?: AccountPcsLink,
    strategy?: AccountStrategy
  ): Account {
    return new Account(
      id,
      name,
      buOwner,
      portfolio,
      salesforceLink,
      pcsLink,
      strategy,
      status
    );
  }

  static fromRequest(accountCreator: AccountPrimitiveType): Account {
    return Account.fromPrimitives(accountCreator);
  }

  static fromFields({
    id,
    name,
    buOwner,
    portfolio,
    status,
    salesforceLink,
    pcsLink,
    strategy,
  }: {
    id?: AccountId;
    name?: AccountName;
    buOwner?: BuOwner;
    portfolio?: Portfolio;
    status?: AccountStatus;
    salesforceLink?: AccountSalesforceLink;
    pcsLink?: AccountPcsLink;
    strategy?: AccountStrategy;
  }): Account {
    return new Account(
      id || AccountIdMother.random(),
      name || AccountNameMother.random(),
      buOwner,
      portfolio,
      salesforceLink || AccountSalesforceLinkMother.random(),
      pcsLink || AccountPcsLinkMother.random(),
      strategy || AccountStrategyMother.random(),
      status || AccountStatusMother.random()
    );
  }

  static random(): Account {
    return this.create(
      AccountIdMother.random(),
      AccountNameMother.random(),
      null,
      null,
      AccountStatusMother.random(),
      AccountSalesforceLinkMother.random(),
      AccountPcsLinkMother.random(),
      AccountStrategyMother.random()
    );
  }
}
