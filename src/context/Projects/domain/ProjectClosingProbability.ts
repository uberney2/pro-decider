import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectClosingProbability extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
