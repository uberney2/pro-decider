import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectFullTimeEmployees extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }

  private ensureValueIsNumber(value: string): void {
    const parsedValue = Number(value);
    if (isNaN(parsedValue)) {
      throw new Error('Project Full TimeEmployees must be a number');
    }
  }
}
