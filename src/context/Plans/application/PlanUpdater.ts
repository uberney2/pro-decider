import { PlanCreatorRequest } from './PlanRequest';
import { ProjectRepository } from '../../Projects/domain';
import { Plan, PlanRepository } from '../domain';
import { PlanNotUpdated, PlanNotFound } from '../domain/exceptions';
import { BaseDimension } from '../../Shared/domain/dimension/application/BaseDimension';
import { ProjectNotFound } from '../../Projects/domain/exceptions';

export class PlanUpdater extends BaseDimension {
  constructor(
    protected projectRepository: ProjectRepository,
    protected planRepository: PlanRepository
  ) {
    super(planRepository);
  }

  async run(planRequest: PlanCreatorRequest): Promise<Plan> {
    const planObject = Plan.fromPrimitives(planRequest);

    await this.ensureDimensionExist(
      this.projectRepository,
      planObject.projectId,
      ProjectNotFound
    );
    await this.ensureDimensionExist(
      this.planRepository,
      planObject.id,
      PlanNotFound
    );

    const isUpdated = await this.planRepository.update(planObject);

    if (!isUpdated) {
      throw new PlanNotUpdated(planObject.id);
    }
    return await this.planRepository.findById(planObject.id);
  }
}
