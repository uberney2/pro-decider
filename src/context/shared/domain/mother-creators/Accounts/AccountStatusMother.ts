import { AccountStatus } from '../../../../Accounts/domain';
import { MotherCreator } from '../MotherCreator';

export class AccountStatusMother {
  static create(value: string): AccountStatus {
    return new AccountStatus(value);
  }

  static random(): AccountStatus {
    return this.create(MotherCreator.random().datatype.boolean.toString());
  }
}
