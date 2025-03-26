import { Plan, PlanPrimitiveType } from '../../../context/Plans';
import { UpdatePlanDto, UpdatePlanFullDto } from './dto/update-plan-dto';

export class PlanMapper {
  static toPrimitives(plan: Plan): PlanPrimitiveType {
    return {
      id: plan.id.value,
      projectId: plan.projectId.value,
      backlogResponsible: plan.backlogResponsible.value,
      roadMap: plan.roadMap.value,
      deliverables: plan.deliverables.value,
      status: plan.status.value,
      observations: plan.observations.value,
    };
  }

  static toFullPlanDto(planWithOutId: UpdatePlanDto): UpdatePlanFullDto {
    const fullPlan: UpdatePlanFullDto = {
      id: planWithOutId.id,
      backlogResponsible: planWithOutId.backlogResponsible,
      roadMap: planWithOutId.roadMap,
      deliverables: planWithOutId.deliverables,
      observations: planWithOutId.observations,
      status: planWithOutId.status,
    };
    return fullPlan;
  }
}
