import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class AuthPeoplePassword extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}