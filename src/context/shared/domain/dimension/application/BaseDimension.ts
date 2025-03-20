import { PlanRepository, PlanId } from '../../../../Plans/domain';
import { TeamRepository, TeamId } from '../../../../Teams/domain';
import { ProjectRepository, ProjectId } from '../../../../Projects/domain';
import { ProcessRepository, ProcessId } from '../../../../Processes/domain';
import { QARepository, QAId } from '../../../../QA/domain';
import { GutRepository, GutId } from '../../../../Gut/domain';


export class BaseDimension {
  constructor(
    protected baseRepository:
      | ProjectRepository
      | TeamRepository
      | PlanRepository
      | ProcessRepository
      | QARepository
      | GutRepository
  ) {}

  protected async ensureDimensionExist(
    baseRepository,
    dimensionId:
      | ProjectId
      | PlanId
      | TeamId
      | ProcessId
      | QAId
      | GutId,
    error
  ) {
    const dimensionFound = await baseRepository.findById(dimensionId);
    if (!dimensionFound) {
      throw new error(dimensionId);
    }
    return dimensionFound;
  }
}
