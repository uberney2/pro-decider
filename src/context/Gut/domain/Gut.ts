import { ProjectId } from '../../Projects/domain';
import { DimensionObservations } from '../../Shared/domain/dimension/DimensionObservations';
import { DimensionStatus } from '../../Shared/domain/dimension/DimensionStatus';
import { GutId } from './GutId';
export type GutPrimitiveType = {
  id: string;
  status?: string;
  observations?: string;
  projectId: string;
};

export class Gut {
  id: GutId;
  status?: DimensionStatus;
  observations?: DimensionObservations;
  projectId: ProjectId;

  constructor(
    id: GutId,
    projectId: ProjectId,
    status?: DimensionStatus,
    observations?: DimensionObservations
  ) {
    this.id = id;
    this.projectId = projectId;
    this.status = status;
    this.observations = observations;
  }

  static fromPrimitives(plainData: GutPrimitiveType): Gut {
    return new Gut(
      new GutId(plainData.id),
      new ProjectId(plainData.projectId),
      new DimensionStatus(plainData.status),
      new DimensionObservations(plainData.observations)
    );
  }

  toPrimitives(): GutPrimitiveType {
    return {
      id: this.id.value,
      projectId: this.projectId.value,
      status: this.status.value,
      observations: this.observations.value,
    };
  }
}
