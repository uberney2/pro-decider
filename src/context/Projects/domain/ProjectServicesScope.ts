import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectServicesScope extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
