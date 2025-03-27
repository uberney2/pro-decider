import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectActiveEmployees extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
