import { BuOwner } from '../domain';
import { BuOwnerRepository } from '../domain/BuOwnerRepository';

export class BuOwnerFinderAll {
  constructor(private repositoryBuOwner: BuOwnerRepository) {}

  run(): Promise<Array<BuOwner>> {
    return this.repositoryBuOwner.findAll();
  }
}
