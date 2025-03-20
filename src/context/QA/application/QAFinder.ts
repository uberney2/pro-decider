import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { QA, QARepository } from '../domain';
import { QANotFound } from '../domain/exceptions';

export class QAFinder extends DimensionValidations {
  constructor(
    private repository: QARepository,
    protected projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(param: string): Promise<QA> {
    const projectId = new ProjectId(param);

    await this.ensureProjectExists(projectId);

    const qa = await this.repository.findByParam(projectId);

    if (!qa) {
      throw new QANotFound(projectId);
    }

    return qa;
  }
}
