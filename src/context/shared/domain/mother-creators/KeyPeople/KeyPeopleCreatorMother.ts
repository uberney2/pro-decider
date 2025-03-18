import {
  KeyPeopleCreatedAt,
  KeyPeoplePrimitiveType,
  KeyPeopleUpdatedAt,
  KeyPeopleEmail,
  KeyPeopleRole,
  KeyPeopleName,
  KeyPeopleId,
} from '../../../../KeyPeople/domain';
import { KeyPeopleEmailMother } from './KeyPeopleEmailMother';
import { KeyPeopleRoleMother } from './KeyPeopleRoleMother';
import { KeyPeopleNameMother } from './KeyPeopleNameMother';
import { KeyPeopleIdMother } from './KeyPeopleIdMother';
import { KeyPeopleCreatedAtMother } from './KeyPeopleCreatedAtMother';
import { KeyPeopleUpdatedAtMother } from './KeyPeopleUpdatedAtMother';
export class KeyPeopleCreatorMother {
  static create(
    id: KeyPeopleId,
    name: KeyPeopleName,
    role: KeyPeopleRole,
    email: KeyPeopleEmail,
    createdAt?: KeyPeopleCreatedAt,
    updatedAt?: KeyPeopleUpdatedAt
  ): KeyPeoplePrimitiveType {
    return {
      id: id.value,
      name: name.value,
      role: role.value,
      email: email.value,
      createdAt: createdAt.value,
      updatedAt: updatedAt.value,
    };
  }

  static invalidEmailRequest(): KeyPeoplePrimitiveType {
    return this.create(
      KeyPeopleIdMother.random(),
      KeyPeopleNameMother.random(),
      KeyPeopleRoleMother.random(),
      KeyPeopleEmailMother.invalidEmail()
    );
  }

  static invalidIdRequest(): KeyPeoplePrimitiveType {
    return this.create(
      KeyPeopleIdMother.invalidId(),
      KeyPeopleNameMother.random(),
      KeyPeopleRoleMother.random(),
      KeyPeopleEmailMother.random()
    );
  }

  static random(): KeyPeoplePrimitiveType {
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
