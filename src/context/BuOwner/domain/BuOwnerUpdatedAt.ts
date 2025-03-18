import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class BuOwnerUpdatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
