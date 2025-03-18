import { CreateAccountKeyPeopleDto } from './create-account-keypeople.dto';

type KeyPeopleWithNotes = {
  id: string;
  name: string;
  role: string;
  email: string;
  note?: string;
};

type AccountPortfolio = {
  id: string;
  name: string;
};

type AccountBuOwner = {
  id: string;
  name: string;
};

export class ShowAllResponse {
  id: string;
  name: string;
  buOwner?: AccountBuOwner;
  portfolio?: AccountPortfolio;
  status?: string;
  keyPeople?: KeyPeopleWithNotes[];
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    id: string,
    name: string,
    buOwner?: AccountBuOwner,
    portfolio?: AccountPortfolio,
    status?: string,
    salesforceLink?: string,
    pcsLink?: string,
    strategy?: string,
    keyPeople: KeyPeopleWithNotes[] = [],
    createdAt?: Date,
    updatedAt?: Date
  ) {
    this.id = id;
    this.name = name;
    this.buOwner = buOwner;
    this.portfolio = portfolio;
    this.status = status;
    this.keyPeople = keyPeople;
    this.salesforceLink = salesforceLink;
    this.pcsLink = pcsLink;
    this.strategy = strategy;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  fillKeyPeople(keyPeople: CreateAccountKeyPeopleDto[]) {
    this.keyPeople = keyPeople;
  }
}
