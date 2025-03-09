import { KeyPeopleCreatorRequest } from './KeyPeopleCreatorRequest';
import {
  KeyPeople,
  KeyPeopleEmail,
  KeyPeopleId,
  KeyPeopleName,
  KeyPeopleRole,
} from '../domain';
import { KeyPeopleRepository } from '../domain/KeyPeopleRepository';
import { KeyPeopleAlreadyExists } from '../domain/exceptions/KeyPeopleAlreadyExists';
export class KeyPeopleCreator {
  constructor(private repository: KeyPeopleRepository) {}

  async run(keyPeople: KeyPeopleCreatorRequest): Promise<KeyPeople> {
    const { id, name, role, email } = keyPeople;

    const recordToStore = new KeyPeople(
      new KeyPeopleId(id),
      new KeyPeopleEmail(email),
      new KeyPeopleName(name),
      new KeyPeopleRole(role)
    );

    const [foundById, foundByEmail] = await Promise.all([
      this.repository.findById(recordToStore.id),
      this.repository.findByEmail(recordToStore.email),
    ]);

    if (foundById || foundByEmail) {
      throw new KeyPeopleAlreadyExists(recordToStore);
    }

    return this.repository.insert(recordToStore);
  }
}
