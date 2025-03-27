import { Status } from '../../infrastructure/persistance/DimensionBaseEntity';
import { ValueObject } from '../value-object/ValueObject';

export class DimensionStatus extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    value && this.ensureIsValidStatus(value);
  }

  private ensureIsValidStatus(status: string): void {
    if (!(Object.values(Status) as string[]).includes(status)) {
      throw new Error(`<${this.value}> is not a valid dimension status`);
    }
  }
}
