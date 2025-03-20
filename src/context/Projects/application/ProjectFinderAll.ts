import { Project } from '../domain/Project';
import { ProjectRepository } from '../domain/ProjectRepository';

export class ProjectFinderAll {
  constructor(private projectRepository: ProjectRepository) {}

  async run(hasDimensions = false, isExecution = false): Promise<Project[]> {
    if (hasDimensions) {
      return await this.projectRepository.findAllWithDimensions();
    }

    if (isExecution) {
      return await this.projectRepository.findAllExecutionProjects();
    }

    return await this.projectRepository.findAll();
  }
}
