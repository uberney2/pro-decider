import { QA } from './QA';
import {
  IGenericRepositoryFindById,
  IGenericRepositoryFindByParam,
  IGenericRepositoryInsert,
  IGenericRepositoryUpdate,
} from '../../Shared/domain/generic-repository';

export interface QARepository
  extends IGenericRepositoryInsert<QA>,
    IGenericRepositoryFindById<QA>,
    IGenericRepositoryUpdate<QA>,
    IGenericRepositoryFindByParam<QA> {}
