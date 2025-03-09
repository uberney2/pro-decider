import { KeyPeople } from './KeyPeople';
import { KeyPeopleCreatedAt } from './KeyPeopleCreatedAt';
import { KeyPeopleEmail } from './KeyPeopleEmail';
import { KeyPeopleId } from './KeyPeopleId';
import { KeyPeopleName } from './KeyPeopleName';
import { KeyPeopleNote } from './KeyPeopleNote';
import { KeyPeopleRole } from './KeyPeopleRole';
import { KeyPeopleUpdatedAt } from './KeyPeopleUpdatedAt';

export type KeyPeopleWithNotesPrimitiveType = {
  id: string;
  name: string;
  role: string;
  email: string;
  note: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class KeyPeopleWithNotes extends KeyPeople {
  note: KeyPeopleNote;

  constructor(
    id: KeyPeopleId,
    name: KeyPeopleName,
    role: KeyPeopleRole,
    email: KeyPeopleEmail,
    note: KeyPeopleNote,
    createdAt: KeyPeopleCreatedAt,
    updatedAt: KeyPeopleUpdatedAt
  ) {
    super(id, email, name, role, createdAt, updatedAt);
    this.note = note;
  }

  static fromPrimitives(
    plainData: KeyPeopleWithNotesPrimitiveType
  ): KeyPeopleWithNotes {
    return new KeyPeopleWithNotes(
      new KeyPeopleId(plainData.id),
      new KeyPeopleName(plainData.name),
      new KeyPeopleRole(plainData.role),
      new KeyPeopleEmail(plainData.email),
      new KeyPeopleNote(plainData.note),
      new KeyPeopleCreatedAt(plainData.createdAt),
      new KeyPeopleUpdatedAt(plainData.updatedAt)
    );
  }

  toPrimitives(): KeyPeopleWithNotesPrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      role: this.role.value,
      email: this.email.value,
      note: this.note.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
