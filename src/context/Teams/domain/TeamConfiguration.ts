import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class TeamConfiguration extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
