import { ValueObject } from '../../Shared/domain/value-object/ValueObject';
import { BuOwnerNameEmpty } from './exceptions/BuOwnerNameNotEmpty';

export class BuOwnerName extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsDefined(value);
    this.ensureIsNotEmptyString(value);
  }

  private ensureIsNotEmptyString(value: string) {
    if (value && value.trim()) return;
    throw new BuOwnerNameEmpty();
  }
}
