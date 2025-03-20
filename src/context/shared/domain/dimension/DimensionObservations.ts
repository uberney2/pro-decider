import { ValueObject } from '../value-object/ValueObject';

export class DimensionObservations extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
