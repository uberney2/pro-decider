import { MotherCreator } from './../MotherCreator';
import { KeyPeopleName } from './../../../../KeyPeople/domain/KeyPeopleName';
export class KeyPeopleNameMother {
  static create(value: string): KeyPeopleName {
    return new KeyPeopleName(value);
  }

  static random(): KeyPeopleName {
    return this.create(MotherCreator.random().name.fullName());
  }

  static invalidName(): KeyPeopleName {
    return this.create('');
  }
}
