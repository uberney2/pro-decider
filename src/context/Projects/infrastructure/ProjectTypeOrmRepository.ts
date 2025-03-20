import { ProjectName } from './../domain/ProjectName';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, SelectQueryBuilder, UpdateResult } from 'typeorm';
import {
  ContractType,
  Project,
  ProjectId,
  ProjectRepository,
  ProjectResponsibleFromLatam,
} from '../domain';
import { ProjectEntity } from './ProjectEntity';
import { Status } from '../domain/ProjectStatus';
import { AccountEntity } from '../../Accounts/infrastructure';
import { AccountStatus } from '../../Accounts/infrastructure/typeorm/AccountEntity';
import { Account } from '../../Accounts/domain/Account';
import { Nullable } from '../../Shared/domain/Nullable';
import { AccountId } from '../../Accounts/domain';

@Injectable()
export class ProjectTypeOrmRepository implements ProjectRepository {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(project: Project): Promise<Project> {
    const projectEntity = this.toEntity(project);
    await this.projectRepository.insert(projectEntity);
    return project;
  }

  async findById(id: ProjectId): Promise<Nullable<Project>> {
    const projectFound = await this.projectRepository.findOneBy({
      id: id.value,
    });
    return projectFound && this.projectEntityToDomainEntity(projectFound);
  }

  async update(project: Project): Promise<boolean> {
    const projectEntity = this.toEntity(project);
    delete projectEntity.name;
    const updateResult: UpdateResult = await this.projectRepository.update(
      { id: projectEntity.id },
      projectEntity
    );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId | ProjectName): Promise<Project> {
    let dbRecords;
    if (param instanceof ProjectId) {
      dbRecords = await this.projectRepository.findOne({
        where: { id: param.value },
        relations: [],
      });
      return dbRecords && Project.fromPrimitives(dbRecords);
    }
    dbRecords = await this.projectRepository.findOne({
      where: { name: param.value },
    });

    return dbRecords && Project.fromPrimitives(dbRecords);
  }

  async findAll(): Promise<Project[]> {
    const dbRecord = await this.projectRepository.find();
    return dbRecord.map(this.projectEntityToDomainEntity);
  }

  async findAllProjectsByAccountId(accountId: AccountId): Promise<Project[]> {
    const dbRecord = await this.getProjectQueryBuilder()
      .where('project.accountId = :accountId', { accountId: accountId.value })
      .getMany();
    return dbRecord.map(this.projectEntityToDomainEntityWithDimensions);
  }

  async findAllExecutionProjects(): Promise<Project[]> {
    const dbRecord = await this.getProjectQueryBuilder()
      .where('project.status = :status', { status: Status.EXECUTION })
      .getMany();
    return dbRecord.map(this.projectEntityToDomainEntity);
  }

  async findAllWithDimensions(): Promise<Project[]> {
    const dbRecord = await this.getProjectQueryBuilder().getMany();
    return dbRecord.map(this.projectEntityToDomainEntityWithDimensions);
  }

  private getProjectQueryBuilder(): SelectQueryBuilder<ProjectEntity> {
    return this.projectRepository
      .createQueryBuilder('project')
      .leftJoinAndSelect('project.team', 'team')
      .leftJoinAndSelect('project.plan', 'plan')
      .leftJoinAndSelect('project.process', 'process')
      .leftJoinAndSelect('project.gut', 'gut')
      .leftJoinAndSelect('project.qa', 'qa')
      .leftJoinAndSelect('project.account', 'account')
      .leftJoinAndSelect('account.buOwner', 'buOwner')
      .leftJoinAndSelect('account.portfolio', 'portfolio');
  }

  private toEntity(project: Project): ProjectEntity {
    const projectEntity = new ProjectEntity();
    projectEntity.id = project.id.value;
    projectEntity.name = project.name.value;
    projectEntity.fullTimeEmployees = project.fullTimeEmployees.value;
    projectEntity.averageBillingRate = project.averageBillingRate.value;
    projectEntity.totalHours = project.totalHours.value;
    projectEntity.gmPercentage = project.gmPercentage.value;
    projectEntity.totalSOW = project.totalSOW.value;
    projectEntity.contractType = project.contractType.value as ContractType;
    projectEntity.usaPointOfContact = project.usaPointOfContact.value;
    projectEntity.pursuitStartDate = project.pursuitStartDate.value;
    projectEntity.pursuitEndDate = project.pursuitEndDate.value;
    projectEntity.statusChangeDate = project.statusChangeDate.value;
    projectEntity.closingProbability = project.closingProbability.value;
    projectEntity.latamRevenue = project.latamRevenue.value;
    projectEntity.latamParticipationPercentage =
      project.latamParticipationPercentage.value;
    projectEntity.activeEmployees = project.activeEmployees.value;
    projectEntity.responsibleFromLatam = project.responsibleFromLatam.map(
      this.responsibleFromLatamValueObjectToEntity
    );
    projectEntity.status = project.status.value as Status;
    projectEntity.additionalBackground = project.additionalBackground.value;
    projectEntity.onboardingProcess = project.onboardingProcess.value;
    projectEntity.servicesScope = project.servicesScope.value;
    projectEntity.levelOfAccount = project.levelOfAccount.value;
    projectEntity.account = this.accountValueObjectToEntity(project.account);
    return projectEntity;
  }

  private responsibleFromLatamValueObjectToEntity(
    responsible: ProjectResponsibleFromLatam
  ): string {
    return responsible.value;
  }

  private accountValueObjectToEntity(account: Account): AccountEntity {
    const entity = new AccountEntity();
    entity.id = account.id.value;
    entity.name = account.name.value;
    entity.status = account.status?.value as AccountStatus;
    entity.salesforceLink = account.salesforceLink?.value;
    entity.pcsLink = account.pcsLink?.value;
    entity.strategy = account.strategy?.value;
    entity.portfolio = account.portfolio?.toPrimitives();
    entity.buOwner = account.buOwner?.toPrimitives();
    return entity;
  }

  private projectEntityToDomainEntityWithDimensions(
    projectEntity: ProjectEntity
  ): Project {
    const completeProjectEntity = {
      ...projectEntity,
      team:
        projectEntity.team !== null
          ? { ...projectEntity.team, projectId: projectEntity.id }
          : null,
      plan:
        projectEntity.plan !== null
          ? { ...projectEntity.plan, projectId: projectEntity.id }
          : null,
      process:
        projectEntity.process !== null
          ? { ...projectEntity.process, projectId: projectEntity.id }
          : null,
      gut:
        projectEntity.gut !== null
          ? { ...projectEntity.gut, projectId: projectEntity.id }
          : null,
      qa:
        projectEntity.qa !== null
          ? { ...projectEntity.qa, projectId: projectEntity.id }
          : null,
    };

    return Project.fromPrimitives(completeProjectEntity);
  }

  private projectEntityToDomainEntity(projectEntity: ProjectEntity): Project {
    const completeProjectEntity = {
      ...projectEntity,
      team: null,
      plan: null,
      process: null,
      gut: null,
      qa: null,
      risk: null,
    };
    return Project.fromPrimitives(completeProjectEntity);
  }
}
