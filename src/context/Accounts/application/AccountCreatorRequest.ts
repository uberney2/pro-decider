export interface AccountCreatorRequest {
  id: string;
  name: string;
  status?: string;
  salesforceLink?: string;
  pcsLink?: string;
  strategy?: string;
  keyPeople?: KeyPeopleWithNotes[];
  buOwner?: BuOwnerCreatorRequest;
  portfolio?: PortfolioCreatorRequest;
}

export interface BuOwnerCreatorRequest {
  id: string;
  name: string;
}

export interface PortfolioCreatorRequest {
  id: string;
  name: string;
}

export interface KeyPeopleWithNotes {
  id: string;
  name: string;
  role: string;
  email: string;
  note: string;
}
