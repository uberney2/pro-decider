export interface PlanCreatorRequest {
  id: string;
  projectId: string;
  backlogResponsible?: string;
  roadMap?: string;
  deliverables?: string;
  status?: string;
  observations?: string;
}
