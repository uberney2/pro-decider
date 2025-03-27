import { AuthPeopleId } from '../AuthPeopleId';
import { AuthPeopleEmail } from '../AuthPeopleEmail';

export class AuthPeopleWithPortfolioNotFound extends Error {
  constructor(param: AuthPeopleId | AuthPeopleEmail) {
    super('This user does not have a portfolio ' + param.value);
  }
}
