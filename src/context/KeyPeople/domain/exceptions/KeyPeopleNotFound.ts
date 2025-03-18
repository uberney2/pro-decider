import { KeyPeopleId } from '../KeyPeopleId';

export class KeyPeopleNotFound extends Error {
  constructor(id: KeyPeopleId) {
    super('Key People not found with id: ' + id.value);
  }
}
