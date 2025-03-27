import {
  ProjectId,
  ProjectRepository,
  Project,
} from '../../../Projects/domain';
import { ProjectNotFound } from '../../../Projects/domain/exceptions/ProjectNotFound';

export class DimensionValidations {
  constructor(protected projectRepository: ProjectRepository) {}

  protected async ensureProjectExists(projectId: ProjectId) {
    const projectFound = await this.projectRepository.findById(projectId);

    if (!projectFound) {
      throw new ProjectNotFound(projectId);
    }
  }

  protected async getValidProject(projectId: ProjectId): Promise<Project> {
    const projectFound = await this.projectRepository.findById(projectId);

    if (!projectFound) {
      throw new ProjectNotFound(projectId);
    }

    return projectFound;
  }
}
