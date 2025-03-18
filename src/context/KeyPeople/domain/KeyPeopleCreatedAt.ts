import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class KeyPeopleCreatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
