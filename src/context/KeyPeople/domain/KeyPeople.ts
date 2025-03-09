import { KeyPeopleCreatedAt } from './KeyPeopleCreatedAt';
import { KeyPeopleEmail } from './KeyPeopleEmail';
import { KeyPeopleId } from './KeyPeopleId';
import { KeyPeopleName } from './KeyPeopleName';
import { KeyPeopleRole } from './KeyPeopleRole';
import { KeyPeopleUpdatedAt } from './KeyPeopleUpdatedAt';

export type KeyPeoplePrimitiveType = {
  id: string;
  name: string;
  role: string;
  email: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class KeyPeople {
  id: KeyPeopleId;
  name: KeyPeopleName;
  role: KeyPeopleRole;
  email: KeyPeopleEmail;
  createdAt?: KeyPeopleCreatedAt;
  updatedAt?: KeyPeopleUpdatedAt;

  constructor(
    id: KeyPeopleId,
    email: KeyPeopleEmail,
    name: KeyPeopleName,
    role: KeyPeopleRole,
    createdAt?: KeyPeopleCreatedAt,
    updatedAt?: KeyPeopleUpdatedAt
  ) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromPrimitives(plainData: KeyPeoplePrimitiveType): KeyPeople {
    return new KeyPeople(
      new KeyPeopleId(plainData.id),
      new KeyPeopleEmail(plainData.email),
      new KeyPeopleName(plainData.name),
      new KeyPeopleRole(plainData.role),
      new KeyPeopleCreatedAt(plainData.createdAt),
      new KeyPeopleUpdatedAt(plainData.updatedAt)
    );
  }

  toPrimitives(): KeyPeoplePrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      role: this.role.value,
      email: this.email.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
