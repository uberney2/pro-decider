export class PlanAlreadyExist extends Error {
  constructor() {
    super('Already Exist a plan for this project');
  }
}
