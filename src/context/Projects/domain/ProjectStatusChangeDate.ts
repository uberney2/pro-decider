import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectStatusChangeDate extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
