import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectTotalSOW extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
