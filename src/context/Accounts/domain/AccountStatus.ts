import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class AccountStatus extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
