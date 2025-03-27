import { QACreatorRequest } from './QACreatorRequest';
import { ProjectRepository } from '../../Projects/domain';
import { QA, QARepository } from '../domain';
import { QANotUpdated, QANotFound } from '../domain/exceptions';
import { BaseDimension } from '../../Shared/domain/dimension/application/BaseDimension';
import { ProjectNotFound } from '../../Projects/domain/exceptions';
import { Inject } from '@nestjs/common';

export class QAUpdater extends BaseDimension {
  constructor(
    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository,

    @Inject('QARepository')
    protected readonly qaRepository: QARepository
  ) {
    super(qaRepository);
  }

  async run(qaRequest: QACreatorRequest): Promise<QA> {
    const qaObject = QA.fromPrimitives(qaRequest);

    await this.ensureDimensionExist(
      this.projectRepository,
      qaObject.projectId,
      ProjectNotFound
    );
    await this.ensureDimensionExist(this.qaRepository, qaObject.id, QANotFound);

    const isUpdated = await this.qaRepository.update(qaObject);

    if (!isUpdated) {
      throw new QANotUpdated(qaObject.id);
    }
    return await this.qaRepository.findById(qaObject.id);
  }
}
