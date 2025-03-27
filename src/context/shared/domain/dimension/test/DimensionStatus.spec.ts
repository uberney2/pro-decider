import { DimensionStatusMother } from '../../mother-creators/Dimension/DimensionStatusMother';
import { DimensionStatus } from '../DimensionStatus';

describe('dimension status', () => {
  it('should create a dimension status object if the value is not empty', () => {
    const value = DimensionStatusMother.random().value;
    const statusObject = new DimensionStatus(value);

    expect(statusObject.value).toEqual(value);
  });
});
