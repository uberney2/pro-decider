import { KeyPeopleEmailMother } from './../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleEmailMother';
import { KeyPeopleEmail } from './../KeyPeopleEmail';
describe('KeyPeople email', () => {
  it('should create a valid email with the user@email.extension syntax', () => {
    const email = KeyPeopleEmailMother.random().value;
    const emailObject = new KeyPeopleEmail(email);
    expect(emailObject.value).toEqual(email);
  });

  it('should throw error if the email value does not use the user@email.extension syntax', () => {
    const createEmailObject = () => {
      KeyPeopleEmailMother.invalidEmail();
    };
    expect(createEmailObject).toThrowError();
  });
});
