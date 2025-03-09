import { AccountId } from '../AccountId';
import { AccountName } from '../AccountName';
export class AccountNotFound extends Error {
  constructor(param: AccountId | AccountName) {
    super('Account not found with param: ' + param.value);
  }
}
