import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class KeyPeopleUpdatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
