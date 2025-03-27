import { Project } from '../Project';

export class ProjectAlreadyExist extends Error {
  constructor(project: Project) {
    super('This Project already exists:' + project.id.value);
  }
}
