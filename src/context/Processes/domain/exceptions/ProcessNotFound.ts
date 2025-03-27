import { ProjectId } from '../../../Projects/domain';

export class ProcessNotFound extends Error {
  constructor(param: ProjectId) {
    super(`Process not found for project: ${param.value}`);
  }
}
