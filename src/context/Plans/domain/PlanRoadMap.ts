import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PlanRoadMap extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
