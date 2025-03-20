import { ProcessCreatorRequest } from './ProcessCreatorRequest';
import { ProjectRepository } from '../../Projects/domain';
import { Process, ProcessRepository } from '../domain';
import { ProcessNotUpdated, ProcessNotFound } from '../domain/exceptions';
import { BaseDimension } from '../../Shared/domain/dimension/application/BaseDimension';
import { ProjectNotFound } from '../../Projects/domain/exceptions';

export class ProcessUpdater extends BaseDimension {
  constructor(
    protected projectRepository: ProjectRepository,
    protected processRepository: ProcessRepository
  ) {
    super(processRepository);
  }

  async run(processRequest: ProcessCreatorRequest): Promise<Process> {
    const processObject = Process.fromPrimitives(processRequest);

    await this.ensureDimensionExist(
      this.projectRepository,
      processObject.projectId,
      ProjectNotFound
    );
    await this.ensureDimensionExist(
      this.processRepository,
      processObject.id,
      ProcessNotFound
    );

    const isUpdated = await this.processRepository.update(processObject);

    if (!isUpdated) {
      throw new ProcessNotUpdated(processObject.id);
    }
    return await this.processRepository.findById(processObject.id);
  }
}
