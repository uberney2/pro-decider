import { BuOwner } from '../domain';
import { BuOwnerRepository } from '../domain/BuOwnerRepository';
import { Inject } from '@nestjs/common';

export class BuOwnerFinderAll {
  
  constructor(
    @Inject('BuOwnerRepository')
    private readonly repositoryBuOwner: BuOwnerRepository
  ) {}

  run(): Promise<Array<BuOwner>> {
    return this.repositoryBuOwner.findAll();
  }
}
