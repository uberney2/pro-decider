import { AccountPrimitiveType } from '../../Accounts/domain';

export class ProjectRequest {
  id: string;
  account: AccountPrimitiveType;
  name: string;
  fullTimeEmployees: string;
  averageBillingRate: string;
  totalHours: string;
  closingProbability: string;
  latamRevenue: string;
  latamParticipationPercentage: string;
  activeEmployees: string;
  gmPercentage?: string;
  totalSOW?: string;
  contractType?: string;
  usaPointOfContact: string;
  pursuitStartDate?: Date;
  pursuitEndDate?: Date;
  statusChangeDate: Date;
  createdAt?: Date;
  updatedAt?: Date;
  responsibleFromLatam: string[];
  status?: string;
  additionalBackground?: string;
  onboardingProcess?: string;
  servicesScope?: string;
  levelOfAccount?: string;
}
