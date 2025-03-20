import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectTotalHours extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  private ensureValueIsNumber(value: string): void {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      throw new Error('The field Total Hours must be a number');
    }
  }
}
