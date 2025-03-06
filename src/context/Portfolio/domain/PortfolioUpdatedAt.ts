import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PortfolioUpdatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
