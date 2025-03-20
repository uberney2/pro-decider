import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export enum Status {
  OPEN = 'Open',
  PRE_ANALYSIS = 'Preanalysis',
  ENGINEERING_REVIEW = 'Engineering Review',
  IN_VALIDATION = 'In Validation',
  CANCELLED = 'Cancelled',
  EXECUTION = 'Execution',
  RISK = 'Risk',
  COMPLETED = 'Completed',
  CLOSED = 'Closed',
}

export class ProjectStatus extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    value && this.ensureIsValidStatus(value);
  }
  private ensureIsValidStatus(status: string): void {
    if (!(Object.values(Status) as string[]).includes(status)) {
      throw new Error(`<${this.value}> is not a valid status`);
    }
  }
}
