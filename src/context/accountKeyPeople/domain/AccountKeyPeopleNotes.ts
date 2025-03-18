import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class AccountKeyPeopleNotes extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsDefined(value);
  }
}
