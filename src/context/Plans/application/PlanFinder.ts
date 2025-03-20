import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Plan, PlanRepository } from '../domain';
import { PlanNotFound } from '../domain/exceptions/PlanNotFound';

export class PlanFinder extends DimensionValidations {
  constructor(
    private repository: PlanRepository,
    protected projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(param: string): Promise<Plan> {
    const projectId = new ProjectId(param);

    await this.ensureProjectExists(projectId);

    const plan = await this.repository.findByParam(projectId);

    if (!plan) {
      throw new PlanNotFound(projectId);
    }

    return plan;
  }
}
