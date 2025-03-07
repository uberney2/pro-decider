import { BuOwnerNameMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerNameMother';
import { BuOwnerName } from '../BuOwnerName';

describe('BuOwner Name', () => {
  it('should create a name when valid name is provided', () => {
    const name = BuOwnerNameMother.random().value;
    const nameObject = new BuOwnerName(name);
    expect(name).toEqual(nameObject.value);
  });
  it('should throw an error when invalid name is provided', () => {
    const nameObject = () => BuOwnerNameMother.invalidName();
    expect(nameObject).toThrowError();
  });
});
