import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectOnboardingProcess extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
