import { ValueObject } from '../../Shared/domain/value-object/ValueObject';
export class ProjectGmPercentage extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
