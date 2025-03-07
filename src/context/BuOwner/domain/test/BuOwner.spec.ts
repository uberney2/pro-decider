import { BuOwnerCreatedAtMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerCreatedAtMother';
import { BuOwnerIdMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerIdMother';
import { BuOwnerNameMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerNameMother';
import { BuOwner } from '../BuOwner';
import { BuOwnerUpdatedAtMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerUpdatedAtMother';

describe('BuOwner', () => {
  it('should create a BuOwner domain entity when all of its property rules are fulfilled', () => {
    const id = BuOwnerIdMother.random();
    const name = BuOwnerNameMother.random();
    const createdAt = BuOwnerCreatedAtMother.random();
    const updatedAt = BuOwnerUpdatedAtMother.random();
    let buOwnder: BuOwner;
    try {
      buOwnder = new BuOwner(id, name, createdAt, updatedAt);
    } catch (error) {
      console.log(error);
    }
    expect(buOwnder).toBeDefined();
  });
});
