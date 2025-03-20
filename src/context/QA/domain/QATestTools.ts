import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class QATestTools extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
