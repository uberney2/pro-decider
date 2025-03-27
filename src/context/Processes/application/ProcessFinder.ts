import { Inject } from '@nestjs/common';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Process, ProcessRepository } from '../domain';
import { ProcessNotFound } from '../domain/exceptions';

export class ProcessFinder extends DimensionValidations {
  constructor(
    @Inject('ProcessRepository')
    private readonly repository: ProcessRepository,

    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(param: string): Promise<Process> {
    const projectId = new ProjectId(param);

    await this.ensureProjectExists(projectId);

    const process = await this.repository.findByParam(projectId);

    if (!process) {
      throw new ProcessNotFound(projectId);
    }

    return process;
  }
}
