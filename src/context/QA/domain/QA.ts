import { ProjectId } from '../../Projects/domain';
import { DimensionObservations } from '../../Shared/domain/dimension/DimensionObservations';
import { DimensionStatus } from '../../Shared/domain/dimension/DimensionStatus';
import { QAAutomatedProcess } from './QAAutomatedProcess';
import { QAAutomationLevel } from './QAAutomationLevel';
import { QACurrentStatus } from './QACurrentStatus';
import { QAId } from './QAId';
import { QAManualProcess } from './QAManualProcess';
import { QATestTools } from './QATestTools';
export type QAPrimitiveType = {
  id: string;
  currentStatus?: string;
  testTools?: string;
  automationLevel?: string;
  manualProcess?: boolean;
  automatedProcess?: boolean;
  projectId: string;
  status?: string;
  observations?: string;
};

export class QA {
  id: QAId;
  projectId: ProjectId;
  currentStatus?: QACurrentStatus;
  testTools?: QATestTools;
  automationLevel?: QAAutomationLevel;
  manualProcess?: QAManualProcess;
  automatedProcess?: QAAutomatedProcess;
  status?: DimensionStatus;
  observations?: DimensionObservations;

  constructor(
    id: QAId,
    projectId: ProjectId,
    currentStatus?: QACurrentStatus,
    testTools?: QATestTools,
    automationLevel?: QAAutomationLevel,
    manualProcess?: QAManualProcess,
    automatedProcess?: QAAutomatedProcess,
    status?: DimensionStatus,
    observations?: DimensionObservations
  ) {
    this.id = id;
    this.projectId = projectId;
    this.currentStatus = currentStatus;
    this.testTools = testTools;
    this.automationLevel = automationLevel;
    this.manualProcess = manualProcess;
    this.automatedProcess = automatedProcess;
    this.status = status;
    this.observations = observations;
  }

  static fromPrimitives(plainData: QAPrimitiveType): QA {
    return new QA(
      new QAId(plainData.id),
      new ProjectId(plainData.projectId),
      new QACurrentStatus(plainData.currentStatus),
      new QATestTools(plainData.testTools),
      new QAAutomationLevel(plainData.automationLevel),
      new QAManualProcess(plainData.manualProcess),
      new QAAutomatedProcess(plainData.automatedProcess),
      new DimensionStatus(plainData.status),
      new DimensionObservations(plainData.observations)
    );
  }

  toPrimitives(): QAPrimitiveType {
    return {
      id: this.id.value,
      projectId: this.projectId.value,
      currentStatus: this.currentStatus.value,
      testTools: this.testTools.value,
      automationLevel: this.automationLevel.value,
      manualProcess: this.manualProcess.value,
      automatedProcess: this.automatedProcess.value,
      status: this.status.value,
      observations: this.observations.value,
    };
  }
}
