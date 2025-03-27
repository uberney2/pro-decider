import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectPursuitEndDate extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }
}
