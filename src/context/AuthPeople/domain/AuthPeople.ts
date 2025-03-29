import { Portfolio, PortfolioPrimitiveType } from 'src/context/Portfolio';
import { AuthPeopleEmail } from './AuthPeopleEmail';
import { AuthPeopleId } from './AuthPeopleId';
import { AuthPeoplePassword } from './AuthPeoplePassword';

export type AuthPeoplePrimitiveType = {
  id: string;
  authPeopleEmail: string;
  authPeoplePassword: string;
  portfolio?: PortfolioPrimitiveType
};

export class AuthPeople {
  id: AuthPeopleId;
  authPeopleEmail: AuthPeopleEmail;
  authPeoplePassword: AuthPeoplePassword
  portfolio: Portfolio

  constructor(id: AuthPeopleId, AuthPeopleUser: AuthPeopleEmail, AuthPeoplePassword: AuthPeoplePassword, Portfolio?: Portfolio) {
    this.id = id;
    this.authPeopleEmail = AuthPeopleUser;
    this.authPeoplePassword = AuthPeoplePassword;
    this.portfolio = Portfolio
  }

  static fromPrimitives(plainData: AuthPeoplePrimitiveType): AuthPeople {
    return new AuthPeople(
      new AuthPeopleId(plainData.id),
      new AuthPeopleEmail(plainData.authPeopleEmail),
      new AuthPeoplePassword(plainData.authPeoplePassword),
      plainData.portfolio && Portfolio.fromPrimitives(plainData.portfolio),
    );
  }

  toPrimitives(): AuthPeoplePrimitiveType {
    return {
      id: this.id.value,
      authPeopleEmail: this.authPeopleEmail.value,
      authPeoplePassword: this.authPeoplePassword.value,
      portfolio: this.portfolio?.toPrimitives()
    };
  }
}
