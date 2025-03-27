import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectAdditionalBackground extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
