import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class PlanDeliverables extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
