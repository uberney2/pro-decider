import { BuOwnerCreatedAtMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerCreatedAtMother';
import { BuOwnerCreatedAt } from '../BuOwnerCreatedAt';

describe('BuOwner CreatedAt', () => {
  it('should create a createdAt when date is provided', () => {
    const date = BuOwnerCreatedAtMother.random().value;
    const dateObject = new BuOwnerCreatedAt(date);
    expect(date).toEqual(dateObject.value);
  });
});
