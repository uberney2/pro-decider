import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Gut, GutRepository } from '../domain';
import { GutNotFound } from '../domain/exceptions/GutNotFound';

export class GutFinder extends DimensionValidations {
  constructor(
    private repository: GutRepository,
    protected projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(param: string): Promise<Gut> {
    const projectId = new ProjectId(param);

    await this.ensureProjectExists(projectId);

    const gut = await this.repository.findByParam(projectId);

    if (!gut) {
      throw new GutNotFound(projectId);
    }

    return gut;
  }
}
