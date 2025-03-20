import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PlanBacklogResponsible extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
