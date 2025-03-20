import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Plan, PlanRepository, exceptions } from '../domain';
import { ProjectRepository } from '../../Projects/domain/ProjectRepository';
import { PlanCreatorRequest } from './PlanRequest';
import { ProjectId } from '../../Projects/domain';

export class PlanCreator extends DimensionValidations {
  constructor(
    private planRepository: PlanRepository,
    protected projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(request: PlanCreatorRequest): Promise<Plan> {
    const projectId = new ProjectId(request.projectId);
    await this.ensureProjectExists(projectId);
    const newPlan = Plan.fromPrimitives(request);
    const existingPlan = await this.planRepository.findById(newPlan.id);

    if (existingPlan) {
      throw new exceptions.PlanAlreadyExist();
    }

    return await this.planRepository.insert(newPlan);
  }
}
