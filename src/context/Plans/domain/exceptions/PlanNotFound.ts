import { ProjectId } from '../../../Projects/domain';

export class PlanNotFound extends Error {
  constructor(param: ProjectId) {
    super(`Plan not found for project: ${param.value}`);
  }
}
