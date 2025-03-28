import { QACreatorRequest } from './QACreatorRequest';
import { QA, QARepository, exceptions } from '../domain';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Inject } from '@nestjs/common';

export class QACreator extends DimensionValidations {
  constructor(
    @Inject('QARepository')
    private readonly repository: QARepository,

    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(request: QACreatorRequest): Promise<QA> {
    const projectId = new ProjectId(request.projectId);

    await this.ensureProjectExists(projectId);

    const newQA = QA.fromPrimitives(request);

    const existingQA = await this.repository.findById(newQA.id);

    if (existingQA) {
      throw new exceptions.QAAlreadyExists(newQA);
    }

    return this.repository.insert(newQA);
  }
}
