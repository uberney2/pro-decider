import { ProjectId } from '../../../Projects/domain';

export class QANotFound extends Error {
  constructor(param: ProjectId) {
    super(`QA not found for project: ${param.value}`);
  }
}
