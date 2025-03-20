import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProcessFrequencyToDeploy extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
