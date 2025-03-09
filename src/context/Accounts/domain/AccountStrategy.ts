import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class AccountStrategy extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
