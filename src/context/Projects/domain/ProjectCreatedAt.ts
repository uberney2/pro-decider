import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectCreatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
