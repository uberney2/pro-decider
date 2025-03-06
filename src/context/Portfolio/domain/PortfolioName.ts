import { ValueObject } from '../../Shared/domain/value-object/ValueObject';
import { PortfolioNameEmpty } from './exceptions/PortfolioNameNotEmpty';

export class PortfolioName extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsDefined(value);
    this.ensureIsNotEmptyString(value);
  }

  private ensureIsNotEmptyString(value: string) {
    if (value && value.trim()) return;
    throw new PortfolioNameEmpty();
  }
}
