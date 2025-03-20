import { PlanId } from '../PlanId';

export class PlanNotUpdated extends Error {
  constructor(planId: PlanId) {
    super(`The plan with Id: ${planId} could not be updated`);
  }
}
