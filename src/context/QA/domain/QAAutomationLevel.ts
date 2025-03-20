import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class QAAutomationLevel extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
