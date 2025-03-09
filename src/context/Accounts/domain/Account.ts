import { AccountName } from './AccountName';
import { AccountId } from './AccountId';
import { AccountStatus } from './AccountStatus';
import { AccountSalesforceLink } from './AccountSalesforceLink';
import { AccountPcsLink } from './AccountPcsLink';
import { AccountStrategy } from './AccountStrategy';
import { Portfolio, PortfolioPrimitiveType } from '../../Portfolio/domain';
import { BuOwner, BuOwnerPrimitiveType } from '../../BuOwner/domain';

export type AccountPrimitiveType = {
  id: string;
  name: string;
  status?: string;
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
  buOwner?: BuOwnerPrimitiveType;
  portfolio?: PortfolioPrimitiveType;
};

export class Account {
  id: AccountId;
  name: AccountName;
  buOwner?: BuOwner;
  portfolio?: Portfolio;
  status?: AccountStatus;
  salesforceLink?: AccountSalesforceLink;
  pcsLink?: AccountPcsLink;
  strategy?: AccountStrategy;

  constructor(
    id: AccountId,
    name: AccountName,
    buOwner?: BuOwner,
    portfolio?: Portfolio,
    salesforceLink?: AccountSalesforceLink,
    pcsLink?: AccountPcsLink,
    strategy?: AccountStrategy,
    status?: AccountStatus
  ) {
    this.id = id;
    this.name = name;
    this.buOwner = buOwner;
    this.portfolio = portfolio;
    this.status = status;
    this.salesforceLink = salesforceLink;
    this.pcsLink = pcsLink;
    this.strategy = strategy;
  }

  static fromPrimitives(plainData: AccountPrimitiveType): Account {
    return new Account(
      new AccountId(plainData.id),
      new AccountName(plainData.name),
      plainData.buOwner && BuOwner.fromPrimitives(plainData.buOwner),
      plainData.portfolio && Portfolio.fromPrimitives(plainData.portfolio),
      new AccountSalesforceLink(plainData.salesforceLink),
      new AccountPcsLink(plainData.pcsLink),
      new AccountStrategy(plainData.strategy),
      new AccountStatus(plainData.status)
    );
  }

  toPrimitives(): AccountPrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      buOwner: this.buOwner?.toPrimitives(),
      portfolio: this.portfolio?.toPrimitives(),
      salesforceLink: this.salesforceLink?.value,
      pcsLink: this.pcsLink?.value,
      strategy: this.strategy?.value,
      status: this.status.value,
    };
  }
}
