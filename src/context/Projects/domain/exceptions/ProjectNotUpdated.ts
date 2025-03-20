import { ProjectId } from '../ProjectId';

export class ProjectNotUpdated extends Error {
  constructor(id: ProjectId) {
    super('This Pursuit or Project was not updated ' + id.value);
  }
}
