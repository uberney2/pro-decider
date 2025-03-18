import { BuOwnerIdMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerIdMother';
import { BuOwnerId } from '../BuOwnerId';

describe('BuOwner Id', () => {
  it('should create id when valid uuid is provided', () => {
    const id = BuOwnerIdMother.random().value;
    const idObject = new BuOwnerId(id);
    expect(idObject.value).toEqual(id);
  });
  it('should throw an error when invalid uuid is provided', () => {
    const idObject = () => BuOwnerIdMother.invalidId();
    expect(idObject).toThrowError();
  });
});
