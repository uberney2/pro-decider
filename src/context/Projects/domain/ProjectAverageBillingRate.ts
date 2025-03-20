import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectAverageBillingRate extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  private ensureValueIsNumber(value: string): void {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      throw new Error('The field Average Billing Rate must be a number');
    }
  }
}
