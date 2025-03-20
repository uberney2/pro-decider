import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectName extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsDefined(value);
  }
}
