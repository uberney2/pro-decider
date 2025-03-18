import { AccountId } from '../../../../Accounts/domain';
import { MotherCreator } from '../MotherCreator';
import { UuidMother } from '../UuidMother';

export class AccountIdMother {
  static create(value: string) {
    return new AccountId(value);
  }

  static random(): AccountId {
    return this.create(UuidMother.random());
  }

  static invalidId(): AccountId {
    return this.create(MotherCreator.random().random.alphaNumeric(7));
  }
}
