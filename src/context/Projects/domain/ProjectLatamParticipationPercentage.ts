import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export class ProjectLatamParticipationPercentage extends ValueObject<string> {
  constructor(value: string) {
    super(value);
  }
}
