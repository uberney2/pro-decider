import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class QAManualProcess extends ValueObject<boolean> {
  constructor(value: boolean) {
    super(value);
  }
}
