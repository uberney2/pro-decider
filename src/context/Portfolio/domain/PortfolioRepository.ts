import {
  IGenericRepositoryFindAll,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { Portfolio } from './Portfolio';

export interface PortfolioRepository
  extends IGenericRepositoryFindAll<Portfolio>,
    IGenericRepositoryInsert<Portfolio> {}
