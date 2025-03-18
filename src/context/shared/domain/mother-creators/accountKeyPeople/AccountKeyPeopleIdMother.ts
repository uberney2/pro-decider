import { AccountKeyPeopleId } from '../../../../accountKeyPeople/domain';
import { MotherCreator } from '../MotherCreator';
import { UuidMother } from '../UuidMother';

export class AccountKeyPeopleIdMother {
  static create(value: string): AccountKeyPeopleId {
    return new AccountKeyPeopleId(value);
  }

  static random(): AccountKeyPeopleId {
    return this.create(UuidMother.random());
  }

  static invalidId(): AccountKeyPeopleId {
    return this.create(MotherCreator.random().random.alphaNumeric(7));
  }
}
