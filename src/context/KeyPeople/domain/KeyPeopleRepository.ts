import { KeyPeople } from './KeyPeople';
import { KeyPeopleEmail } from './KeyPeopleEmail';

import {
  IGenericRepositoryInsert,
  IGenericRepositoryFindAll,
  IGenericRepositoryRemove,
  IGenericRepositoryFindById,
} from '../../Shared/domain/generic-repository';
import { Nullable } from '../../Shared/domain/Nullable';

export interface KeyPeopleRepository
  extends IGenericRepositoryInsert<KeyPeople>,
    IGenericRepositoryFindById<KeyPeople>,
    IGenericRepositoryFindAll<KeyPeople>,
    IGenericRepositoryFindById<KeyPeople>,
    IGenericRepositoryRemove {
  findByEmail(keyPeople: KeyPeopleEmail): Promise<Nullable<KeyPeople>>;
}
