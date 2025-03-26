import { Process, ProcessPrimitiveType } from '../../../context/Processes';
import {
  UpdateProcessDto,
  UpdateProcessFullDto,
} from './dto/update-process-dto';

export class ProcessMapper {
  static toPrimitives(process: Process): ProcessPrimitiveType {
    return {
      id: process.id.value,
      projectId: process.projectId.value,
      stack: process.stack.value,
      methodology: process.methodology.value,
      frequencyToDeploy: process.frequencyToDeploy.value,
      latamInfluence: process.latamInfluence.value,
      accountabilityLevel: process.accountabilityLevel.value,
      status: process.status.value,
      observations: process.observations.value,
    };
  }

  static toFullProcessDto(
    processWithOutId: UpdateProcessDto
  ): UpdateProcessFullDto {
    const fullProcess: UpdateProcessFullDto = {
      id: processWithOutId.id,
      stack: processWithOutId.stack,
      methodology: processWithOutId.methodology,
      frequencyToDeploy: processWithOutId.frequencyToDeploy,
      latamInfluence: processWithOutId.latamInfluence,
      accountabilityLevel: processWithOutId.accountabilityLevel,
      observations: processWithOutId.observations,
      status: processWithOutId.status,
    };
    return fullProcess;
  }
}
