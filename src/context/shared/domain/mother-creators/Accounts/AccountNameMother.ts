import { AccountName } from '../../../../Accounts/domain/AccountName';
import { MotherCreator } from '../MotherCreator';

export class AccountNameMother {
  static random() {
    return this.create(MotherCreator.random().company.name());
  }

  static create(name: string): AccountName {
    return new AccountName(name);
  }

  static invalidName(): AccountName {
    return this.create('');
  }
}
