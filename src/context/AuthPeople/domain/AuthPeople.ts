import { AuthPeopleEmail } from './AuthPeopleEmail';
import { AuthPeopleId } from './AuthPeopleId';
import { AuthPeoplePassword } from './AuthPeoplePassword';

export type AuthPeoplePrimitiveType = {
  id: string;
  authPeopleEmail: string;
  authPeoplePassword: string;
};

export class AuthPeople {
  id: AuthPeopleId;
  authPeopleEmail: AuthPeopleEmail;
  authPeoplePassword: AuthPeoplePassword

  constructor(id: AuthPeopleId, AuthPeopleUser: AuthPeopleEmail, AuthPeoplePassword: AuthPeoplePassword) {
    this.id = id;
    this.authPeopleEmail = AuthPeopleUser;
    this.authPeoplePassword = AuthPeoplePassword;
  }

  static fromPrimitives(plainData: AuthPeoplePrimitiveType): AuthPeople {
    return new AuthPeople(
      new AuthPeopleId(plainData.id),
      new AuthPeopleEmail(plainData.authPeopleEmail),
      new AuthPeoplePassword(plainData.authPeoplePassword)
    );
  }

  toPrimitives(): AuthPeoplePrimitiveType {
    return {
      id: this.id.value,
      authPeopleEmail: this.authPeopleEmail.value,
      authPeoplePassword: this.authPeoplePassword.value
    };
  }
}
