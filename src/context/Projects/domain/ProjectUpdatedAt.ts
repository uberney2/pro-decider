import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectUpdatedAt extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
