import { Project } from '../domain';
import { ProjectRepository } from '../domain/ProjectRepository';
import { ProjectRequest } from './ProjectRequest';
import { ProjectNotUpdated } from '../domain/exceptions/ProjectNotUpdated';
import { Inject } from '@nestjs/common';

export class ProjectUpdater {
  constructor(
    @Inject('ProjectRepository')
    private readonly projectRepository: ProjectRepository
  ) {}

  async run(projectRequest: ProjectRequest): Promise<Project> {
    const projectObject = Project.fromPrimitives(projectRequest);
    const isUpdated = await this.projectRepository.update(projectObject);
    if (!isUpdated) {
      throw new ProjectNotUpdated(projectObject.id);
    }
    return await this.projectRepository.findById(projectObject.id);
  }
}
