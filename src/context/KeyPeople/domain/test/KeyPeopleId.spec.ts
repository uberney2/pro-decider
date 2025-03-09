import { KeyPeopleIdMother } from './../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleIdMother';
import { KeyPeopleId } from './../KeyPeopleId';

describe('KeyPeople name', () => {
  it('should throw an error if the id value is not an uuid', () => {
    const createIdObject = () => {
      KeyPeopleIdMother.invalidId();
    };
    expect(createIdObject).toThrowError();
  });

  it('should create a valid id object if it is an uuid', () => {
    const id = KeyPeopleIdMother.random().value;
    const idObject = new KeyPeopleId(id);
    expect(idObject.value).toEqual(id);
  });
});
