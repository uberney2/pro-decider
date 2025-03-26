import { QA, QAPrimitiveType } from '../../../context/QA';
import { UpdateQADto, UpdateQAFullDto } from './dto/update-qa-dto';

export class QAMapper {
  static toPrimitives(qa: QA): QAPrimitiveType {
    return {
      id: qa.id.value,
      projectId: qa.projectId.value,
      currentStatus: qa.currentStatus.value,
      testTools: qa.testTools.value,
      automationLevel: qa.automationLevel.value,
      manualProcess: qa.manualProcess.value,
      automatedProcess: qa.automatedProcess.value,
      status: qa.status.value,
      observations: qa.observations.value,
    };
  }

  static toFullQADto(qaWithOutId: UpdateQADto): UpdateQAFullDto {
    const fullQa: UpdateQAFullDto = {
      id: qaWithOutId.id,
      currentStatus: qaWithOutId.currentStatus,
      testTools: qaWithOutId.testTools,
      automationLevel: qaWithOutId.automationLevel,
      manualProcess: qaWithOutId.manualProcess,
      automatedProcess: qaWithOutId.automatedProcess,
      observations: qaWithOutId.observations,
      status: qaWithOutId.status,
    };
    return fullQa;
  }
}
