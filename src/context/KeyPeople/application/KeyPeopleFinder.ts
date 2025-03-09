import { KeyPeople } from '../domain';
import { KeyPeopleRepository } from './../domain/KeyPeopleRepository';
export class KeyPeopleFinder {
  constructor(private repository: KeyPeopleRepository) {}

  async run(): Promise<KeyPeople[]> {
    return this.repository.findAll();
  }
}
