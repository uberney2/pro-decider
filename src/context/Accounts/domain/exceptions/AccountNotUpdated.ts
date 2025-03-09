import { AccountId } from '../AccountId';

export class AccountNotUpdated extends Error {
  constructor(id: AccountId) {
    super('This Account was not updated ' + id.value);
  }
}
