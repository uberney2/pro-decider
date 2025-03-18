import { Account } from './Account';
import {
  KeyPeopleWithNotes,
  KeyPeopleWithNotesPrimitiveType,
} from '../../KeyPeople/domain/KeyPeopleWithNote';
import { AccountId } from './AccountId';
import { AccountName } from './AccountName';
import { AccountStatus } from './AccountStatus';
import { AccountPcsLink } from './AccountPcsLink';
import { AccountSalesforceLink } from './AccountSalesforceLink';
import { AccountStrategy } from './AccountStrategy';
import { Portfolio, PortfolioPrimitiveType } from '../../Portfolio/domain';
import { BuOwner, BuOwnerPrimitiveType } from '../../BuOwner/domain';

export type AccountWithKeyPeoplePrimitiveType = {
  id: string;
  name: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
  buOwner: BuOwnerPrimitiveType;
  portfolio: PortfolioPrimitiveType;
  keyPeopleWithNotes?: KeyPeopleWithNotesPrimitiveType[];
};

export class AccountWithKeyPeople extends Account {
  keyPeople: KeyPeopleWithNotes[];
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: AccountId,
    name: AccountName,
    buOwner: BuOwner,
    portfolio: Portfolio,
    status: AccountStatus,
    keyPeople: KeyPeopleWithNotes[] = [],
    createdAt: Date,
    updatedAt: Date,
    salesforceLink?: AccountSalesforceLink,
    pcsLink?: AccountPcsLink,
    strategy?: AccountStrategy
  ) {
    super(
      id,
      name,
      buOwner,
      portfolio,
      salesforceLink,
      pcsLink,
      strategy,
      status
    );
    this.keyPeople = keyPeople;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromPrimitives(plainData: AccountWithKeyPeoplePrimitiveType) {
    return new AccountWithKeyPeople(
      new AccountId(plainData.id),
      new AccountName(plainData.name),
      plainData.buOwner && BuOwner.fromPrimitives(plainData.buOwner),
      plainData.portfolio && Portfolio.fromPrimitives(plainData.portfolio),
      new AccountStatus(plainData.status),
      plainData.keyPeopleWithNotes.map((keyPeople) => {
        return KeyPeopleWithNotes.fromPrimitives(keyPeople);
      }),
      plainData.createdAt,
      plainData.updatedAt,
      new AccountSalesforceLink(plainData.salesforceLink),
      new AccountPcsLink(plainData.pcsLink),
      new AccountStrategy(plainData.strategy)
    );
  }

  toPrimitives(): AccountWithKeyPeoplePrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      buOwner: this.buOwner?.toPrimitives(),
      portfolio: this.portfolio?.toPrimitives(),
      status: this.status.value,
      keyPeopleWithNotes: this.keyPeople?.map((value) => value.toPrimitives()),
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
