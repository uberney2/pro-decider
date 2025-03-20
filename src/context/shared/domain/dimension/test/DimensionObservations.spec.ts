import { DimensionObservationsMother } from '../../mother-creators/Dimension/DimensionObservationsMother';
import { DimensionObservations } from '../DimensionObservations';

describe('dimension observations', () => {
  it('should create a dimension observations object if the value is not empty', () => {
    const value = DimensionObservationsMother.random().value;
    const observationsObject = new DimensionObservations(value);

    expect(observationsObject.value).toEqual(value);
  });
});
