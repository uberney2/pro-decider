import { AccountId } from '../../Accounts/domain';
import { KeyPeopleWithNotes, KeyPeopleId } from '../../KeyPeople/domain';
import {
  IGenericRepositoryFindAll,
  IGenericRepositoryInsert,
} from '../../Shared/domain/generic-repository';
import { AccountKeyPeople } from './AccountKeyPeople';
import { AccountKeyPeopleNotes } from './AccountKeyPeopleNotes';
export interface AccountKeyPeopleRepository
  extends IGenericRepositoryInsert<AccountKeyPeople>,
    IGenericRepositoryFindAll<AccountKeyPeople> {
  remove(accountId: AccountId, keyPeopleId: KeyPeopleId): Promise<boolean>;
  findKeyPeopleByAccountId(accountId: AccountId): Promise<KeyPeopleWithNotes[]>;
  update(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    note: AccountKeyPeopleNotes
  ): Promise<boolean>;
}
