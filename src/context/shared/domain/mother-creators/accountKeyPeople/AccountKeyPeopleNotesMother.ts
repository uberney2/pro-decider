import { AccountKeyPeopleNotes } from '../../../../accountKeyPeople/domain/AccountKeyPeopleNotes';
import { MotherCreator } from '../MotherCreator';
export class AccountKeyPeopleNotesMother {
  static create(value: string): AccountKeyPeopleNotes {
    return new AccountKeyPeopleNotes(value);
  }

  static random(): AccountKeyPeopleNotes {
    return this.create(MotherCreator.random().music.songName());
  }

  static invalidNote(): AccountKeyPeopleNotes {
    return this.create('');
  }
}
