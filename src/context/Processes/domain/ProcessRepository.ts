import { Process } from './Process';
import {
  IGenericRepositoryFindById,
  IGenericRepositoryFindByParam,
  IGenericRepositoryInsert,
  IGenericRepositoryUpdate,
} from '../../Shared/domain/generic-repository';
export interface ProcessRepository
  extends IGenericRepositoryInsert<Process>,
    IGenericRepositoryFindById<Process>,
    IGenericRepositoryUpdate<Process>,
    IGenericRepositoryFindByParam<Process> {}
