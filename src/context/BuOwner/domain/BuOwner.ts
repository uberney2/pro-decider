import { BuOwnerCreatedAt } from './BuOwnerCreatedAt';
import { BuOwnerId } from './BuOwnerId';
import { BuOwnerName } from './BuOwnerName';
import { BuOwnerUpdatedAt } from './BuOwnerUpdatedAt';

export type BuOwnerPrimitiveType = {
  id: string;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
};

export class BuOwner {
  id: BuOwnerId;
  name: BuOwnerName;
  createdAt?: BuOwnerCreatedAt;
  updatedAt?: BuOwnerUpdatedAt;

  constructor(
    id: BuOwnerId,
    name: BuOwnerName,
    createdAt?: BuOwnerCreatedAt,
    updatedAt?: BuOwnerUpdatedAt
  ) {
    this.id = id;
    this.name = name;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static fromPrimitives(plainData: BuOwnerPrimitiveType): BuOwner {
    return new BuOwner(
      new BuOwnerId(plainData.id),
      new BuOwnerName(plainData.name),
      new BuOwnerCreatedAt(plainData.createdAt),
      new BuOwnerUpdatedAt(plainData.updatedAt)
    );
  }

  toPrimitives(): BuOwnerPrimitiveType {
    return {
      id: this.id.value,
      name: this.name.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
    };
  }
}
