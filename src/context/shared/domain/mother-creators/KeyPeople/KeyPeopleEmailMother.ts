import { MotherCreator } from './../MotherCreator';
import { KeyPeopleEmail } from './../../../../KeyPeople/domain/KeyPeopleEmail';
export class KeyPeopleEmailMother {
  static create(value: string): KeyPeopleEmail {
    return new KeyPeopleEmail(value);
  }

  static random(): KeyPeopleEmail {
    return this.create(MotherCreator.random().internet.email());
  }

  static invalidEmail(): KeyPeopleEmail {
    return this.create(MotherCreator.random().name.firstName());
  }
}
