import { Gut } from './Gut';
import {
  IGenericRepositoryFindById,
  IGenericRepositoryFindByParam,
  IGenericRepositoryInsert,
  IGenericRepositoryUpdate,
} from '../../Shared/domain/generic-repository';

export interface GutRepository
  extends IGenericRepositoryInsert<Gut>,
    IGenericRepositoryFindById<Gut>,
    IGenericRepositoryUpdate<Gut>,
    IGenericRepositoryFindByParam<Gut> {}
