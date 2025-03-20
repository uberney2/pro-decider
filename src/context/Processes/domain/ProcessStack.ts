import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProcessStack extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
