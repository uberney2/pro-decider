import { Plan } from './Plan';
import {
  IGenericRepositoryFindById,
  IGenericRepositoryFindByParam,
  IGenericRepositoryInsert,
  IGenericRepositoryUpdate,
} from '../../Shared/domain/generic-repository';
export interface PlanRepository
  extends IGenericRepositoryInsert<Plan>,
    IGenericRepositoryFindById<Plan>,
    IGenericRepositoryFindByParam<Plan>,
    IGenericRepositoryUpdate<Plan> {}
