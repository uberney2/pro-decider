import { ValueObject } from '../../Shared/domain/value-object/ValueObject';
export class ProjectLevelOfAccount extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
