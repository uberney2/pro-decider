import { Team } from './Team';
import {
  IGenericRepositoryFindById,
  IGenericRepositoryFindByParam,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { IGenericRepositoryUpdate } from '../../Shared/domain/generic-repository/IGenericRepositoryUpdate';

export interface TeamRepository
  extends IGenericRepositoryInsert<Team>,
    IGenericRepositoryFindById<Team>,
    IGenericRepositoryFindByParam<Team>,
    IGenericRepositoryUpdate<Team> {}
