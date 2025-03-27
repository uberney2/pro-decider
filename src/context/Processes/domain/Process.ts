import { ProcessAccountabilityLevel } from './ProcessAccountabilityLevel';
import { ProcessFrequencyToDeploy } from './ProcessFrequencyToDeploy';
import { ProcessId } from './ProcessId';
import { ProcessLatamInfluence } from './ProcessLatamInfluence';
import { ProcessMethodology } from './ProcessMethodology';
import { ProcessStack } from './ProcessStack';
import { ProjectId } from '../../Projects/domain/ProjectId';
import { DimensionStatus } from '../../Shared/domain/dimension/DimensionStatus';
import { DimensionObservations } from '../../Shared/domain/dimension/DimensionObservations';

export type ProcessPrimitiveType = {
  id: string;
  stack?: string;
  methodology?: string;
  frequencyToDeploy?: string;
  latamInfluence?: string;
  accountabilityLevel?: string;
  projectId: string;
  status?: string;
  observations?: string;
};

export class Process {
  id: ProcessId;
  projectId: ProjectId;
  stack?: ProcessStack;
  methodology?: ProcessMethodology;
  frequencyToDeploy?: ProcessFrequencyToDeploy;
  latamInfluence?: ProcessLatamInfluence;
  accountabilityLevel?: ProcessAccountabilityLevel;
  status?: DimensionStatus;
  observations?: DimensionObservations;

  constructor(
    id: ProcessId,
    projectId: ProjectId,
    stack?: ProcessStack,
    methodology?: ProcessMethodology,
    frequencyToDeploy?: ProcessFrequencyToDeploy,
    latamInfluence?: ProcessLatamInfluence,
    accountabilityLevel?: ProcessAccountabilityLevel,
    status?: DimensionStatus,
    observations?: DimensionObservations
  ) {
    this.id = id;
    this.projectId = projectId;
    this.stack = stack;
    this.methodology = methodology;
    this.frequencyToDeploy = frequencyToDeploy;
    this.latamInfluence = latamInfluence;
    this.accountabilityLevel = accountabilityLevel;
    this.status = status;
    this.observations = observations;
  }

  static fromPrimitives(plainData: ProcessPrimitiveType): Process {
    return new Process(
      new ProcessId(plainData.id),
      new ProjectId(plainData.projectId),
      new ProcessStack(plainData.stack),
      new ProcessMethodology(plainData.methodology),
      new ProcessFrequencyToDeploy(plainData.frequencyToDeploy),
      new ProcessLatamInfluence(plainData.latamInfluence),
      new ProcessAccountabilityLevel(plainData.accountabilityLevel),
      new DimensionStatus(plainData.status),
      new DimensionObservations(plainData.observations)
    );
  }

  toPrimitives(): ProcessPrimitiveType {
    return {
      id: this.id.value,
      projectId: this.projectId.value,
      stack: this.stack.value,
      methodology: this.methodology.value,
      frequencyToDeploy: this.frequencyToDeploy.value,
      latamInfluence: this.latamInfluence.value,
      accountabilityLevel: this.accountabilityLevel.value,
      status: this.status.value,
      observations: this.observations.value,
    };
  }
}
