import { TeamComposition } from './TeamComposition';
import { TeamId } from './TeamId';
import { TeamEnglishLevel } from './TeamEnglishLevel';
import { TeamConfiguration } from './TeamConfiguration';
import { DimensionObservations } from '../../Shared/domain/dimension/DimensionObservations';
import { TeamDeployDate } from './TeamDeployDate';
import { DimensionStatus } from '../../Shared/domain/dimension/DimensionStatus';
import { ProjectId } from '../../Projects/domain';

export type TeamPrimitiveType = {
  id: string;
  projectId: string;
  composition?: string;
  teamConfiguration?: string;
  englishLevel?: string;
  deployDate?: Date;
  status?: string;
  observations?: string;
};

export class Team {
  id: TeamId;
  projectId: ProjectId;
  composition?: TeamComposition;
  teamConfiguration?: TeamConfiguration;
  englishLevel?: TeamEnglishLevel;
  deployDate?: TeamDeployDate;
  status?: DimensionStatus;
  observations?: DimensionObservations;

  constructor(
    id: TeamId,
    projectId: ProjectId,
    composition?: TeamComposition,
    teamConfiguration?: TeamConfiguration,
    englishLevel?: TeamEnglishLevel,
    deployDate?: TeamDeployDate,
    status?: DimensionStatus,
    observations?: DimensionObservations
  ) {
    this.id = id;
    this.projectId = projectId;
    this.composition = composition;
    this.teamConfiguration = teamConfiguration;
    this.englishLevel = englishLevel;
    this.deployDate = deployDate;
    this.status = status;
    this.observations = observations;
  }

  static fromPrimitives(plainData: TeamPrimitiveType): Team {
    return new Team(
      new TeamId(plainData.id),
      new ProjectId(plainData.projectId),
      new TeamComposition(plainData.composition),
      new TeamConfiguration(plainData.teamConfiguration),
      new TeamEnglishLevel(plainData.englishLevel),
      new TeamDeployDate(plainData.deployDate),
      new DimensionStatus(plainData.status),
      new DimensionObservations(plainData.observations)
    );
  }

  toPrimitives(): TeamPrimitiveType {
    return {
      id: this.id.value,
      projectId: this.projectId.value,
      composition: this.composition.value,
      teamConfiguration: this.teamConfiguration.value,
      englishLevel: this.englishLevel.value,
      deployDate: this.deployDate.value,
      status: this.status.value,
      observations: this.observations.value,
    };
  }
}
