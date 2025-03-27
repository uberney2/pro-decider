import { AuthPeopleRepository } from '../domain/AuthPeopleRepository';
import { AuthPeopleEmail } from '../domain/AuthPeopleEmail';
import { Portfolio } from '../../Portfolio/domain/Portfolio';
import { AuthPeopleWithPortfolioNotFound } from '../domain/exceptions/AuthPeopleWithPortfolioNotFound';
export class AuthPeoplePortfoliosFinderByParam {
  constructor(private repositoryAuthPeople: AuthPeopleRepository) {}

  async run(param: string): Promise<Portfolio[]> {
    const accountPeopleUser = new AuthPeopleEmail(param);
    const authPeoplePortfolios = await this.repositoryAuthPeople.findByParam(
      accountPeopleUser
    );
    if (authPeoplePortfolios.length === 0) {
      throw new AuthPeopleWithPortfolioNotFound(accountPeopleUser);
    }
    return authPeoplePortfolios;
  }
}
