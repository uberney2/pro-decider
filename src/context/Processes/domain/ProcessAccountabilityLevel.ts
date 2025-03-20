import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export enum AccountabilityLevelEnum {
  RESPONSIBLE_100 = 'Responsible 100%',
  BASED_ON_OUR_DEFINITION = 'Based on our definition',
  SHARED_RESPONSIBILITY = 'Shared Responsibility',
  BASED_ON_CLIENT = 'Based on Client',
  STAFF_AUMENTATION = 'Staff Aumentation',
}

export class ProcessAccountabilityLevel extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    value && this.ensureIsValidStatus(value);
  }

  private ensureIsValidStatus(value: string): void {
    if (!(Object.values(AccountabilityLevelEnum) as string[]).includes(value)) {
      throw new Error(`<${this.value}> is not a valid accountability level`);
    }
  }
}
