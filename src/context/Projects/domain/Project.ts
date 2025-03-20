import { Account, AccountPrimitiveType } from '../../Accounts/domain';
import { Gut, GutPrimitiveType } from '../../Gut/domain';
import { Plan, PlanPrimitiveType } from '../../Plans/domain';
import { Process, ProcessPrimitiveType } from '../../Processes/domain';
import { QA, QAPrimitiveType } from '../../QA/domain';
import { Team, TeamPrimitiveType } from '../../Teams/domain';
import { ProjectAdditionalBackground } from './ProjectAdditionalBackground';
import { ProjectContractType } from './ProjectContractType';
import { ProjectCreatedAt } from './ProjectCreatedAt';
import { ProjectFullTimeEmployees } from './ProjectFullTimeEmployees';
import { ProjectGmPercentage } from './ProjectGmPercentage';
import { ProjectId } from './ProjectId';
import { ProjectLevelOfAccount } from './ProjectLevelOfAccount';
import { ProjectName } from './ProjectName';
import { ProjectOnboardingProcess } from './ProjectOnboardingProcess';
import { ProjectPursuitEndDate } from './ProjectPursuitEndDate';
import { ProjectPursuitStartDate } from './ProjectPursuitStartDate';
import { ProjectResponsibleFromLatam } from './ProjectResponsibleFromLatam';
import { ProjectServicesScope } from './ProjectServicesScope';
import { ProjectStatus } from './ProjectStatus';
import { ProjectStatusChangeDate } from './ProjectStatusChangeDate';
import { ProjectTotalSOW } from './ProjectTotalSOW';
import { ProjectUpdatedAt } from './ProjectUpdatedAt';
import { ProjectUsaPointOfContact } from './ProjectUsaPointOfContact';
import { ProjectAverageBillingRate } from './ProjectAverageBillingRate';
import { ProjectTotalHours } from './ProjectTotalHours';
import { ProjectClosingProbability } from './ProjectClosingProbability';
import { ProjectLatamRevenue } from './ProjectLatamRevenue';
import { ProjectLatamParticipationPercentage } from './ProjectLatamParticipationPercentage';
import { ProjectActiveEmployees } from './ProjectActiveEmployees';


export type ProjectPrimitiveType = {
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
  team?: TeamPrimitiveType;
  plan?: PlanPrimitiveType;
  process?: ProcessPrimitiveType;
  gut?: GutPrimitiveType;
  qa?: QAPrimitiveType;
};
export class Project {
  id: ProjectId;
  account: Account;
  name: ProjectName;
  fullTimeEmployees: ProjectFullTimeEmployees;
  averageBillingRate: ProjectAverageBillingRate;
  totalHours: ProjectTotalHours;
  closingProbability: ProjectClosingProbability;
  latamRevenue: ProjectLatamRevenue;
  latamParticipationPercentage: ProjectLatamParticipationPercentage;
  activeEmployees: ProjectActiveEmployees;
  gmPercentage?: ProjectGmPercentage;
  totalSOW?: ProjectTotalSOW;
  contractType?: ProjectContractType;
  usaPointOfContact: ProjectUsaPointOfContact;
  pursuitStartDate?: ProjectPursuitStartDate;
  pursuitEndDate?: ProjectPursuitEndDate;
  statusChangeDate: ProjectStatusChangeDate;
  createdAt?: ProjectCreatedAt;
  updatedAt?: ProjectUpdatedAt;
  responsibleFromLatam: ProjectResponsibleFromLatam[];
  status?: ProjectStatus;
  additionalBackground?: ProjectAdditionalBackground;
  onboardingProcess?: ProjectOnboardingProcess;
  servicesScope?: ProjectServicesScope;
  levelOfAccount?: ProjectLevelOfAccount;
  team?: Team;
  plan?: Plan;
  process?: Process;
  gut?: Gut;
  qa?: QA;

  constructor(
    id: ProjectId,
    account: Account,
    name: ProjectName,
    fullTimeEmployees: ProjectFullTimeEmployees,
    averageBillingRate: ProjectAverageBillingRate,
    totalHours: ProjectTotalHours,
    closingProbability: ProjectClosingProbability,
    latamRevenue: ProjectLatamRevenue,
    latamParticipationPercentage: ProjectLatamParticipationPercentage,
    activeEmployees: ProjectActiveEmployees,
    usaPointOfContact: ProjectUsaPointOfContact,
    responsibleFromLatam: ProjectResponsibleFromLatam[],
    statusChangeDate: ProjectStatusChangeDate,
    gmPercentage?: ProjectGmPercentage,
    totalSOW?: ProjectTotalSOW,
    contractType?: ProjectContractType,
    pursuitStartDate?: ProjectPursuitStartDate,
    pursuitEndDate?: ProjectPursuitEndDate,
    createdAt?: ProjectCreatedAt,
    updatedAt?: ProjectUpdatedAt,
    status?: ProjectStatus,
    additionalBackground?: ProjectAdditionalBackground,
    onboardingProcess?: ProjectOnboardingProcess,
    servicesScope?: ProjectServicesScope,
    levelOfAccount?: ProjectLevelOfAccount,
    team?: Team,
    plan?: Plan,
    process?: Process,
    gut?: Gut,
    qa?: QA,

  ) {
    (this.id = id),
      (this.account = account),
      (this.name = name),
      (this.fullTimeEmployees = fullTimeEmployees),
      (this.averageBillingRate = averageBillingRate),
      (this.totalHours = totalHours),
      (this.closingProbability = closingProbability),
      (this.latamRevenue = latamRevenue),
      (this.latamParticipationPercentage = latamParticipationPercentage),
      (this.activeEmployees = activeEmployees),
      (this.gmPercentage = gmPercentage),
      (this.totalSOW = totalSOW),
      (this.contractType = contractType),
      (this.usaPointOfContact = usaPointOfContact),
      (this.pursuitStartDate = pursuitStartDate),
      (this.pursuitEndDate = pursuitEndDate),
      (this.statusChangeDate = statusChangeDate),
      (this.createdAt = createdAt),
      (this.updatedAt = updatedAt),
      (this.responsibleFromLatam = responsibleFromLatam),
      (this.status = status),
      (this.additionalBackground = additionalBackground),
      (this.onboardingProcess = onboardingProcess),
      (this.servicesScope = servicesScope),
      (this.levelOfAccount = levelOfAccount),
      (this.team = team),
      (this.plan = plan),
      (this.process = process),
      (this.gut = gut),
      (this.qa = qa);
  }

  static fromPrimitives(plainData: ProjectPrimitiveType): Project {
    return new Project(
      new ProjectId(plainData.id),
      plainData.account && Account.fromPrimitives(plainData.account),
      new ProjectName(plainData.name),
      new ProjectFullTimeEmployees(plainData.fullTimeEmployees),
      new ProjectAverageBillingRate(plainData.averageBillingRate),
      new ProjectTotalHours(plainData.totalHours),
      new ProjectClosingProbability(plainData.closingProbability),
      new ProjectLatamRevenue(plainData.latamRevenue),
      new ProjectLatamParticipationPercentage(
        plainData.latamParticipationPercentage
      ),
      new ProjectActiveEmployees(plainData.activeEmployees),
      new ProjectUsaPointOfContact(plainData.usaPointOfContact),
      plainData.responsibleFromLatam.map(
        (responsible) => new ProjectResponsibleFromLatam(responsible)
      ),
      new ProjectStatusChangeDate(plainData.statusChangeDate),
      new ProjectGmPercentage(plainData.gmPercentage),
      new ProjectTotalSOW(plainData.totalSOW),
      new ProjectContractType(plainData.contractType),
      new ProjectPursuitStartDate(plainData.pursuitStartDate),
      new ProjectPursuitEndDate(plainData.pursuitEndDate),
      new ProjectCreatedAt(plainData.createdAt),
      new ProjectUpdatedAt(plainData.updatedAt),
      new ProjectStatus(plainData.status),
      new ProjectAdditionalBackground(plainData.additionalBackground),
      new ProjectOnboardingProcess(plainData.onboardingProcess),
      new ProjectServicesScope(plainData.servicesScope),
      new ProjectLevelOfAccount(plainData.levelOfAccount),
      plainData.team && Team.fromPrimitives(plainData.team),
      plainData.plan && Plan.fromPrimitives(plainData.plan),
      plainData.process && Process.fromPrimitives(plainData.process),
      plainData.gut && Gut.fromPrimitives(plainData.gut),
      plainData.qa && QA.fromPrimitives(plainData.qa),
    );
  }

  toPrimitives(): ProjectPrimitiveType {
    return {
      id: this.id.value,
      account: this.account?.toPrimitives(),
      name: this.name.value,
      fullTimeEmployees: this.fullTimeEmployees.value,
      averageBillingRate: this.averageBillingRate.value,
      totalHours: this.totalHours.value,
      closingProbability: this.closingProbability.value,
      latamRevenue: this.latamRevenue.value,
      latamParticipationPercentage: this.latamParticipationPercentage.value,
      activeEmployees: this.activeEmployees.value,
      gmPercentage: this.gmPercentage.value,
      totalSOW: this.totalSOW.value,
      contractType: this.contractType.value,
      usaPointOfContact: this.usaPointOfContact.value,
      pursuitStartDate: this.pursuitStartDate.value,
      pursuitEndDate: this.pursuitEndDate.value,
      statusChangeDate: this.statusChangeDate.value,
      createdAt: this.createdAt.value,
      updatedAt: this.updatedAt.value,
      responsibleFromLatam: this.responsibleFromLatam.map(
        (responsible) => responsible.value
      ),
      status: this.status.value,
      additionalBackground: this.additionalBackground.value,
      onboardingProcess: this.onboardingProcess.value,
      servicesScope: this.servicesScope.value,
      levelOfAccount: this.levelOfAccount.value,
      team: this.team?.toPrimitives(),
      plan: this.plan?.toPrimitives(),
      process: this.process?.toPrimitives(),
      gut: this.gut?.toPrimitives(),
      qa: this.qa?.toPrimitives(),
    };
  }
}
