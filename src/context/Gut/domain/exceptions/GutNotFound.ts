import { ProjectId } from '../../../Projects/domain';

export class GutNotFound extends Error {
  constructor(param: ProjectId) {
    super(`Gut not found for project: ${param.value}`);
  }
}
