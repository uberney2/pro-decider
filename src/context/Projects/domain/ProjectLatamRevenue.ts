import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectLatamRevenue extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
