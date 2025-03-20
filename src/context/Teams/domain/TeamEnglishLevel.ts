import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class TeamEnglishLevel extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
