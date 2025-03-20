import { ProjectNotFound } from './../domain/exceptions/ProjectNotFound';
import { ProjectName } from './../domain/ProjectName';
import { Project, ProjectId } from '../domain';
import { ProjectRepository } from '../domain/ProjectRepository';
import { isUuid } from 'tools/functions/isUuid';

export class ProjectFinderByParam {
  constructor(private projectRepository: ProjectRepository) {}

  async run(param: string): Promise<Project> {
    if (isUuid(param)) {
      const projectId = new ProjectId(param);
      const project = await this.projectRepository.findById(projectId);
      if (!project) {
        throw new ProjectNotFound(projectId);
      }
      return project;
    }
    const projectName = new ProjectName(param);
    const project = await this.projectRepository.findByParam(projectName);
    if (!project) {
      throw new ProjectNotFound(projectName);
    }
    return project;
  }
}
