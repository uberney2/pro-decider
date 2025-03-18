import { MotherCreator } from '../MotherCreator';
import { KeyPeopleRole } from './../../../../KeyPeople/domain/KeyPeopleRole';
export class KeyPeopleRoleMother {
  static create(value: string): KeyPeopleRole {
    return new KeyPeopleRole(value);
  }

  static random(): KeyPeopleRole {
    return this.create(MotherCreator.random().name.jobTitle());
  }

  static invalidRole(): KeyPeopleRole {
    return this.create('');
  }
}
