import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class AuthPeopleEmail extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
