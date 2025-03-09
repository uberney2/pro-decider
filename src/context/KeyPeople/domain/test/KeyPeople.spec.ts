import { KeyPeopleRoleMother } from './../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleRoleMother';
import { KeyPeopleNameMother } from './../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleNameMother';
import { KeyPeopleId } from './../KeyPeopleId';
import { KeyPeople } from './../KeyPeople';
import { KeyPeopleIdMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleIdMother';
import { KeyPeopleEmailMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleEmailMother';

describe('KeyPeople', () => {
  it('should create a valid key people entity when all of its property rules are fulfilled', () => {
    const id: KeyPeopleId = KeyPeopleIdMother.random();
    const name = KeyPeopleNameMother.random();
    const role = KeyPeopleRoleMother.random();
    const email = KeyPeopleEmailMother.random();
    let keyPeopleObject: KeyPeople;
    try {
      keyPeopleObject = new KeyPeople(id, email, name, role);
    } catch (error) {
      console.log(error);
    }
    expect(keyPeopleObject).toBeDefined();
  });
});
