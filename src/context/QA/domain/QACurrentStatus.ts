import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class QACurrentStatus extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
