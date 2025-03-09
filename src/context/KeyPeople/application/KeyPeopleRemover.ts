import { KeyPeopleId } from '../domain';
import { KeyPeopleNotFound } from '../domain/exceptions/KeyPeopleNotFound';
import { KeyPeopleRepository } from '../domain/KeyPeopleRepository';

export class KeyPeopleRemover {
  constructor(private repository: KeyPeopleRepository) {}

  async run(id: string): Promise<void> {
    const keyPeopleId = new KeyPeopleId(id);
    const isRemoved = await this.repository.remove(keyPeopleId);

    if (!isRemoved) {
      throw new KeyPeopleNotFound(keyPeopleId);
    }
  }
}
