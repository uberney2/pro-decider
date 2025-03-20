import { IGenericRepositoryFindByParam } from './../../Shared/domain/generic-repository/IGenericRepositoryFindByParam';
import {
  IGenericRepositoryFindAll,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { Project } from './Project';
import { IGenericRepositoryFindById } from '../../Shared/domain/generic-repository/IGenericRepositoryFindById';
import { IGenericRepositoryUpdate } from '../../Shared/domain/generic-repository/IGenericRepositoryUpdate';
import { AccountId } from '../../Accounts/domain/AccountId';

export interface ProjectRepository
  extends IGenericRepositoryInsert<Project>,
    IGenericRepositoryFindById<Project>,
    IGenericRepositoryUpdate<Project>,
    IGenericRepositoryFindByParam<Project>,
    IGenericRepositoryFindAll<Project> {
  findAllWithDimensions(): Promise<Project[]>;
  findAllProjectsByAccountId(projectId: AccountId): Promise<Project[]>;
  findAllExecutionProjects(): Promise<Project[]>;
}
