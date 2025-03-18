import { BuOwner } from '../BuOwner';

export class BuOwnerAlreadyExists extends Error {
  constructor(buOwner: BuOwner) {
    super(
      `This owner already exists. id: ${buOwner.id}, name: ${buOwner.name}`
    );
  }
}
