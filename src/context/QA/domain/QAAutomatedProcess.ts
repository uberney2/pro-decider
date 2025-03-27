import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class QAAutomatedProcess extends ValueObject<boolean> {
  constructor(value: boolean) {
    super(value);
  }
}
