import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectCreator, ProjectFinderAll, ProjectFInderByAccountId, ProjectFinderByParam, infrastructure as projectInfrastructure, ProjectUpdater } from '../../context/Projects';
import { PlanCreator, PlanEntity, PlanFinder, PlanTypeOrmRepository, PlanUpdater } from '../../context/Plans';
import { TeamCreator, TeamFinder,  TeamTypeOrmRepository, TeamUpdater } from '../../context/Teams';
import { TeamEntity } from '../../context/Teams';
import { ProcessCreator, ProcessFinder, ProcessTypeOrmRepository, ProcessUpdater } from '../../context/Processes';
import { ProcessEntity } from '../../context/Processes';
import { QACreator, QaEntity, QAFinder, QATypeOrmRepository, QAUpdater } from '../../context/QA';
import { GutCreator, GutFinder, GutTypeOrmRepository, GutUpdater } from '../../context/Gut';
import { GutEntity } from '../../context/Gut';
import { ProjectTypeOrmRepository } from 'src/context/Projects/infrastructure';
const { ProjectEntity } = projectInfrastructure;

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProjectEntity,
      TeamEntity,
      PlanEntity,
      ProcessEntity,
      GutEntity,
      QaEntity,
    ]),
  ],
  controllers: [ProjectController],
  providers: [
    {
      provide: 'ProjectRepository',
      useClass: ProjectTypeOrmRepository,
    },
    {
      provide: 'PlanRepository',
      useClass: PlanTypeOrmRepository,
    },
    {
      provide: 'ProcessRepository',
      useClass: ProcessTypeOrmRepository,
    },
    {
      provide: 'GutRepository',
      useClass: GutTypeOrmRepository,
    },
    {
      provide: 'TeamRepository',
      useClass: TeamTypeOrmRepository,
    },
    {
      provide: 'QARepository',
      useClass: QATypeOrmRepository,
    },
    ProjectCreator,
    PlanCreator,
    PlanUpdater,
    ProcessCreator,
    GutCreator,
    QACreator,
    TeamCreator,
    ProjectUpdater,
    ProjectFinderByParam,
    ProjectFinderAll,
    TeamFinder,
    TeamUpdater,
    ProcessUpdater,
    QAUpdater,
    GutUpdater,
    PlanFinder,
    ProcessFinder,
    QAFinder,
    GutFinder,
    ProjectFInderByAccountId,
  ],
  exports: [
    ProjectCreator,
    PlanCreator,
    PlanUpdater,
    ProcessCreator,
    GutCreator,
    QACreator,
    TeamCreator,
    ProjectUpdater,
    ProjectFinderByParam,
    ProjectFinderAll,
    TeamFinder,
    TeamUpdater,
    ProcessUpdater,
    QAUpdater,
    GutUpdater,
    PlanFinder,
    ProcessFinder,
    QAFinder,
    GutFinder,
    ProjectFInderByAccountId,
    ],
})
export class ProjectModule { }
