import {
  IGenericRepositoryFindAll,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { BuOwner } from './BuOwner';

export interface BuOwnerRepository
  extends IGenericRepositoryFindAll<BuOwner>,
    IGenericRepositoryInsert<BuOwner> {
  findOne(buOwner: BuOwner): Promise<BuOwner>;
}
