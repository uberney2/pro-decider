import { ProjectRepository, exceptions } from '../domain';
import { Project } from '../domain/Project';
import { ProjectRequest } from './ProjectRequest';

export class ProjectCreator {
  constructor(private projectRepository: ProjectRepository) {}

  async run(request: ProjectRequest): Promise<void> {
    const newProject = Project.fromPrimitives(request);

    if (newProject.pursuitStartDate.value > newProject.pursuitEndDate.value) {
      throw new exceptions.ProjectErrorDate(newProject);
    }

    const existingProject = await this.projectRepository.findById(
      newProject.id
    );

    if (existingProject) {
      throw new exceptions.ProjectAlreadyExist(newProject);
    }

    await this.projectRepository.insert(newProject);
  }
}
