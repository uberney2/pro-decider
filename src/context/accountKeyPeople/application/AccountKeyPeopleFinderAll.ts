import { AccountKeyPeople } from '../domain/AccountKeyPeople';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';

export class AccountKeyPeopleFinderAll {
  constructor(private repositoryAccountKeyPeople: AccountKeyPeopleRepository) {}

  async run(): Promise<AccountKeyPeople[]> {
    return await this.repositoryAccountKeyPeople.findAll();
  }
}
