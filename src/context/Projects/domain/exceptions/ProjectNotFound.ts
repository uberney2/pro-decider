import { ProjectName } from '../ProjectName';
import { ProjectId } from './../ProjectId';

export class ProjectNotFound extends Error {
  constructor(param: ProjectId | ProjectName) {
    super('Project not found with param: ' + param.value);
  }
}
