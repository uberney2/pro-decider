import { AccountStrategy } from '../../../../Accounts/domain';
import { MotherCreator } from '../MotherCreator';

export class AccountStrategyMother {
  static random() {
    return this.create(MotherCreator.random().lorem.paragraph());
  }

  static create(name: string): AccountStrategy {
    return new AccountStrategy(name);
  }

  static invalidName(): AccountStrategy {
    return this.create('');
  }
}
