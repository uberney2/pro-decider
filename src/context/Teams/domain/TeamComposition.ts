import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class TeamComposition extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
