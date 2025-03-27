export interface QACreatorRequest {
  id: string;
  projectId: string;
  currentStatus?: string;
  testTools?: string;
  automationLevel?: string;
  manualProcess?: boolean;
  automatedProcess?: boolean;
  status?: string;
  observations?: string;
}
