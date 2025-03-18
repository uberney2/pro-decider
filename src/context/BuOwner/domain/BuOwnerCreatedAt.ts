import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class BuOwnerCreatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
