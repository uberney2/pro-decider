import { ValueObject } from '../../Shared/domain/value-object/ValueObject';

export enum ContractType {
  TIME_AND_MATERIALS = 'Time & Materials',
  FIXED_FEE = 'Fixed Fee',
}

export class ProjectContractType extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    value && this.ensureIsValidContractType(value);
  }

  private ensureIsValidContractType(contractType: string): void {
    if (!(Object.values(ContractType) as string[]).includes(contractType)) {
      throw new Error(`<${this.value}> is not a valid contract type`);
    }
  }
}
