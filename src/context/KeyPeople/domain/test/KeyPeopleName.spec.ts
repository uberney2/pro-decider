import { KeyPeopleNameMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleNameMother';
import { KeyPeopleName } from './../KeyPeopleName';
describe('KeyPeople name', () => {
  it('should throw an error if the name value has less than 1 character', () => {
    const createNameObject = () => {
      KeyPeopleNameMother.invalidName();
    };
    expect(createNameObject).toThrowError();
  });

  it('should create a name object if the name value has 1 or more characters', () => {
    const name = KeyPeopleNameMother.random().value;
    const nameObject = new KeyPeopleName(name);
    expect(nameObject.value).toEqual(name);
  });
});
