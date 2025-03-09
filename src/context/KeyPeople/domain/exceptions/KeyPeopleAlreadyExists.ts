import { KeyPeople } from '../KeyPeople';

export class KeyPeopleAlreadyExists extends Error {
  constructor(keyPeople: KeyPeople) {
    super(
      `The Key People Record, ID: <'${keyPeople.id.value}'>, EMAIL: <'${keyPeople.email.value}'>, already exists`
    );
  }
}
