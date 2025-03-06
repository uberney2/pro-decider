import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PortfolioCreatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
