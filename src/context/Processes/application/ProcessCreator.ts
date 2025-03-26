import { ProcessCreatorRequest } from './ProcessCreatorRequest';
import { Process, ProcessRepository, exceptions } from '../domain';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Inject } from '@nestjs/common';

export class ProcessCreator extends DimensionValidations {
  constructor(
    @Inject('ProcessRepository')
    private readonly repository: ProcessRepository,

    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(request: ProcessCreatorRequest): Promise<Process> {
    const projectId = new ProjectId(request.projectId);

    await this.ensureProjectExists(projectId);

    const newProcess = Process.fromPrimitives(request);

    const existingProcess = await this.repository.findById(newProcess.id);

    if (existingProcess) {
      throw new exceptions.ProcessAlreadyExists(newProcess);
    }

    return this.repository.insert(newProcess);
  }
}
