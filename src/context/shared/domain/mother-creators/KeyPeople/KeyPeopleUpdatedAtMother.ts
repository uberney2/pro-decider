import { KeyPeopleUpdatedAt } from '../../../../KeyPeople/domain/KeyPeopleUpdatedAt';
import { DateMother } from '../DatesMother';

export class KeyPeopleUpdatedAtMother {
  static create(value: Date) {
    return new KeyPeopleUpdatedAt(value);
  }

  static random(): KeyPeopleUpdatedAt {
    return this.create(DateMother.randomPast());
  }
}
