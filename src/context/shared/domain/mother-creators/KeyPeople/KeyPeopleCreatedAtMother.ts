import { KeyPeopleCreatedAt } from '../../../../KeyPeople/domain/KeyPeopleCreatedAt';
import { DateMother } from '../DatesMother';

export class KeyPeopleCreatedAtMother {
  static create(value: Date) {
    return new KeyPeopleCreatedAt(value);
  }

  static random(): KeyPeopleCreatedAt {
    return this.create(DateMother.randomPast());
  }
}
