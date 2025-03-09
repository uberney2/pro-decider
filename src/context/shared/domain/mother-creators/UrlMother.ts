import { AccountSalesforceLink } from '../../../Accounts/domain/AccountSalesforceLink';
import { Url } from '../value-object/Url';
import { MotherCreator } from './MotherCreator';

export class UrlMother {
  static create(value: string): Url {
    return new AccountSalesforceLink(value);
  }

  static random(): Url {
    return this.create(MotherCreator.random().internet.url());
  }
}
