import { GutCreatorRequest } from './GutCreatorRequest';
import { ProjectRepository } from '../../Projects/domain';
import { Gut, GutRepository } from '../domain';
import { GutNotUpdated, GutNotFound } from '../domain/exceptions';
import { BaseDimension } from '../../Shared/domain/dimension/application/BaseDimension';
import { ProjectNotFound } from '../../Projects/domain/exceptions';
import { Inject } from '@nestjs/common';

export class GutUpdater extends BaseDimension {
  constructor(
    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository,

    @Inject('GutRepository')
    protected readonly gutRepository: GutRepository
  ) {
    super(gutRepository);
  }

  async run(gutRequest: GutCreatorRequest): Promise<Gut> {
    const gutObject = Gut.fromPrimitives(gutRequest);

    await this.ensureDimensionExist(
      this.projectRepository,
      gutObject.projectId,
      ProjectNotFound
    );
    await this.ensureDimensionExist(
      this.gutRepository,
      gutObject.id,
      GutNotFound
    );

    const isUpdated = await this.gutRepository.update(gutObject);

    if (!isUpdated) {
      throw new GutNotUpdated(gutObject.id);
    }
    return await this.gutRepository.findById(gutObject.id);
  }
}
