import { AccountKeyPeople } from '../domain/AccountKeyPeople';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { Inject } from '@nestjs/common';

export class AccountKeyPeopleFinderAll {
  constructor(
    @Inject('AccountKeyPeopleRepository')
    private repositoryAccountKeyPeople: AccountKeyPeopleRepository
  ) {}

  async run(): Promise<AccountKeyPeople[]> {
    return await this.repositoryAccountKeyPeople.findAll();
  }
}
