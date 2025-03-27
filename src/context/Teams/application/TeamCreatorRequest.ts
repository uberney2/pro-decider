export interface TeamCreatorRequest {
  id: string;
  projectId: string;
  composition?: string;
  teamConfiguration?: string;
  englishLevel?: string;
  deployDate?: Date;
  status?: string;
  observations?: string;
}
