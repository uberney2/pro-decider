import { KeyPeopleRoleMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleRoleMother';
import { KeyPeopleRole } from './../KeyPeopleRole';
describe('KeyPeople role', () => {
  it('should throw an error if the role value has less than 1 character', () => {
    const createRoleObject = () => {
      KeyPeopleRoleMother.invalidRole();
    };
    expect(createRoleObject).toThrowError();
  });

  it('should create a valid role with at least 1 character', () => {
    const role = KeyPeopleRoleMother.random().value;
    const roleObject = new KeyPeopleRole(role);
    expect(roleObject.value).toEqual(role);
  });
});
