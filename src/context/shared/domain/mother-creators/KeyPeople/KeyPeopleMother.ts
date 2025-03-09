import {
  KeyPeople,
  KeyPeoplePrimitiveType,
  KeyPeopleRole,
  KeyPeopleCreatedAt,
  KeyPeopleUpdatedAt,
  KeyPeopleEmail,
  KeyPeopleName,
  KeyPeopleId,
} from '../../../../KeyPeople/domain';
import { KeyPeopleCreatedAtMother } from './KeyPeopleCreatedAtMother';
import { KeyPeopleEmailMother } from './KeyPeopleEmailMother';
import { KeyPeopleIdMother } from './KeyPeopleIdMother';
import { KeyPeopleNameMother } from './KeyPeopleNameMother';
import { KeyPeopleRoleMother } from './KeyPeopleRoleMother';
import { KeyPeopleUpdatedAtMother } from './KeyPeopleUpdatedAtMother';
export class KeyPeopleMother {
  static create(
    id: KeyPeopleId,
    name: KeyPeopleName,
    role: KeyPeopleRole,
    email: KeyPeopleEmail,
    createdAt: KeyPeopleCreatedAt,
    updatedAt: KeyPeopleUpdatedAt
  ): KeyPeople {
    return new KeyPeople(id, email, name, role, createdAt, updatedAt);
  }

  static fromRequest(keyPeopleCreator: KeyPeoplePrimitiveType) {
    return KeyPeople.fromPrimitives(keyPeopleCreator);
  }

  static fromFields({
    id,
    name,
    role,
    email,
    createdAt,
    updatedAt,
  }: {
    id?: KeyPeopleId;
    name?: KeyPeopleName;
    role?: KeyPeopleRole;
    email?: KeyPeopleEmail;
    createdAt?: KeyPeopleCreatedAt;
    updatedAt?: KeyPeopleUpdatedAt;
  }): KeyPeople {
    return this.create(
      id || KeyPeopleIdMother.random(),
      name || KeyPeopleNameMother.random(),
      role || KeyPeopleRoleMother.random(),
      email || KeyPeopleEmailMother.random(),
      createdAt || KeyPeopleCreatedAtMother.random(),
      updatedAt || KeyPeopleUpdatedAtMother.random()
    );
  }

  static random(): KeyPeople {
    return this.create(
      KeyPeopleIdMother.random(),
      KeyPeopleNameMother.random(),
      KeyPeopleRoleMother.random(),
      KeyPeopleEmailMother.random(),
      KeyPeopleCreatedAtMother.random(),
      KeyPeopleUpdatedAtMother.random()
    );
  }
}
