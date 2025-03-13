import { Inject } from '@nestjs/common';
import { KeyPeople } from '../domain';
import { KeyPeopleRepository } from './../domain/KeyPeopleRepository';
export class KeyPeopleFinder {
   constructor(
      @Inject('KeyPeopleRepository')
      private readonly repository: KeyPeopleRepository
    ) {}

  async run(): Promise<KeyPeople[]> {
    return this.repository.findAll();
  }
}
