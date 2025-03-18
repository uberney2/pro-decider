import { Account } from '../Account';

export class AccountAlreadyExists extends Error {
  constructor(account: Account) {
    super('This Account already exists:' + account.id.value);
  }
}
