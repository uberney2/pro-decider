import { MotherCreator } from './../MotherCreator';
import { UuidMother } from './../UuidMother';
import { KeyPeopleId } from './../../../../KeyPeople/domain/KeyPeopleId';
export class KeyPeopleIdMother {
  static create(value: string): KeyPeopleId {
    return new KeyPeopleId(value);
  }

  static random(): KeyPeopleId {
    return this.create(UuidMother.random());
  }

  static invalidId(): KeyPeopleId {
    return this.create(MotherCreator.random().random.alphaNumeric(7));
  }
}
