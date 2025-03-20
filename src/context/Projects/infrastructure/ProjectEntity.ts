import { Entity, Column, ManyToOne, OneToOne, OneToMany } from 'typeorm';
import { AccountEntity } from '../../Accounts/infrastructure';

import { BaseEntity } from '../../Shared/infrastructure/persistance/BaseEntity';
import { ContractType } from '../domain/ProjectContractType';
import { Status } from '../domain/ProjectStatus';
import { TeamEntity } from '../../Teams/infrastructure/typeorm/TeamEntity';
import { GutEntity } from '../../Gut/infrastructure';
import { PlanEntity } from '../../Plans/infrastructure/PlanEntity';
import { ProcessEntity } from '../../Processes/infrastructure/ProcessEntity';
import { QaEntity } from '../../QA/infrastructure/QAEntity';
@Entity('projects')
export class ProjectEntity extends BaseEntity {
  @Column('varchar', { length: 100, unique: true, nullable: false })
  name: string;

  @Column('varchar', { length: 100, nullable: true })
  gmPercentage?: string;

  @Column('varchar', { length: 100, nullable: true })
  totalSOW?: string;

  @Column('varchar', { length: 100, nullable: true })
  fullTimeEmployees: string;

  @Column('varchar', { length: 100, nullable: true })
  averageBillingRate: string;

  @Column('varchar', { length: 100, nullable: true })
  totalHours: string;

  @Column({
    type: 'enum',
    enum: ContractType,
    nullable: true,
  })
  contractType?: ContractType;

  @Column('varchar', { length: 100, nullable: false })
  usaPointOfContact: string;

  @Column('date', { nullable: true })
  pursuitStartDate?: Date;

  @Column('date', { nullable: true })
  pursuitEndDate?: Date;

  @Column('date', { nullable: false })
  statusChangeDate: Date;

  @Column('varchar', { array: true, nullable: false })
  responsibleFromLatam: string[];

  @Column({
    type: 'enum',
    enum: Status,
    nullable: true,
  })
  status?: Status;

  @Column('varchar', { length: 5000, nullable: true })
  additionalBackground?: string;

  @Column('varchar', { length: 5000, nullable: true })
  onboardingProcess?: string;

  @Column('varchar', { length: 5000, nullable: true })
  servicesScope?: string;

  @Column('varchar', { length: 5000, nullable: true })
  levelOfAccount?: string;

  @Column('varchar', { length: 100, nullable: true })
  closingProbability: string;

  @Column('varchar', { length: 100, nullable: true })
  latamRevenue: string;

  @Column('varchar', { length: 100, nullable: true })
  latamParticipationPercentage: string;

  @Column('varchar', { length: 100, nullable: true })
  activeEmployees: string;

  @ManyToOne(() => AccountEntity, { eager: true })
  account: AccountEntity;

  @OneToOne(() => TeamEntity, (team) => team.project, { nullable: true })
  team?: TeamEntity;

  @OneToOne(() => PlanEntity, (plan) => plan.project, { nullable: true })
  plan?: PlanEntity;

  @OneToOne(() => ProcessEntity, (process) => process.project, {
    nullable: true,
  })
  process?: ProcessEntity;

  @OneToOne(() => GutEntity, (gut) => gut.project, { nullable: true })
  gut?: GutEntity;

  @OneToOne(() => QaEntity, (qa) => qa.project, { nullable: true })
  qa?: QaEntity;
}
