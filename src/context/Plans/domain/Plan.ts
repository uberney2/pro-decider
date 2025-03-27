import { ProjectId } from '../../Projects/domain';
import { PlanId } from './PlanId';
import { PlanBacklogResponsible } from './PlanBacklogResponsible';
import { PlanRoadMap } from './PlanRoadMap';
import { PlanDeliverables } from './PlanDeliverables';
import { DimensionStatus } from '../../Shared/domain/dimension/DimensionStatus';
import { DimensionObservations } from '../../Shared/domain/dimension/DimensionObservations';

export type PlanPrimitiveType = {
  id: string;
  backlogResponsible?: string;
  roadMap?: string;
  deliverables?: string;
  status?: string;
  observations?: string;
  projectId: string;
};

export class Plan {
  id: PlanId;
  backlogResponsible?: PlanBacklogResponsible;
  roadMap?: PlanRoadMap;
  deliverables?: PlanDeliverables;
  status?: DimensionStatus;
  observations?: DimensionObservations;
  projectId: ProjectId;

  constructor(
    id: PlanId,
    projectId: ProjectId,
    backlogResponsible?: PlanBacklogResponsible,
    roadMap?: PlanRoadMap,
    deliverables?: PlanDeliverables,
    status?: DimensionStatus,
    observations?: DimensionObservations
  ) {
    this.id = id;
    this.projectId = projectId;
    this.backlogResponsible = backlogResponsible;
    this.roadMap = roadMap;
    this.deliverables = deliverables;
    this.status = status;
    this.observations = observations;
  }

  static fromPrimitives(plainData: PlanPrimitiveType): Plan {
    return new Plan(
      new PlanId(plainData.id),
      new ProjectId(plainData.projectId),
      new PlanBacklogResponsible(plainData.backlogResponsible),
      new PlanRoadMap(plainData.roadMap),
      new PlanDeliverables(plainData.deliverables),
      new DimensionStatus(plainData.status),
      new DimensionObservations(plainData.observations)
    );
  }

  toPrimitives(): PlanPrimitiveType {
    return {
      id: this.id.value,
      projectId: this.projectId.value,
      backlogResponsible: this.backlogResponsible.value,
      roadMap: this.roadMap.value,
      deliverables: this.deliverables.value,
      status: this.status.value,
      observations: this.observations.value,
    };
  }
}
