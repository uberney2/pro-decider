import { BuOwner, BuOwnerPrimitiveType } from '../domain';
import { BuOwnerRepository } from '../domain/BuOwnerRepository';
import { BuOwnerAlreadyExists } from '../domain/exceptions';

export class BuOwnerCreator {
  constructor(private repository: BuOwnerRepository) {}

  async run(buOwner: BuOwnerPrimitiveType): Promise<void> {
    const newBuOwner = BuOwner.fromPrimitives(buOwner);

    const buOwnerFound = await this.repository.findOne(newBuOwner);

    if (buOwnerFound) {
      throw new BuOwnerAlreadyExists(newBuOwner);
    }

    await this.repository.insert(newBuOwner);
  }
}
