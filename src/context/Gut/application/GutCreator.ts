import { GutCreatorRequest } from './GutCreatorRequest';
import { Gut, GutRepository, exceptions } from '../domain';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Inject } from '@nestjs/common';


export class GutCreator extends DimensionValidations {
  constructor(
    @Inject('GutRepository')
    private readonly repository: GutRepository,

    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(request: GutCreatorRequest): Promise<Gut> {
    const projectId = new ProjectId(request.projectId);

    await this.ensureProjectExists(projectId);

    const newGut = Gut.fromPrimitives(request);

    const existingGut = await this.repository.findById(newGut.id);

    if (existingGut) {
      throw new exceptions.GutAlreadyExists(newGut);
    }

    return this.repository.insert(newGut);
  }
}
