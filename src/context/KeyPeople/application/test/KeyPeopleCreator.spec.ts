import { KeyPeopleMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleMother';
import { KeyPeopleCreatorMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleCreatorMother';
import { KeyPeopleCreator } from '../KeyPeopleCreator';
import { KeyPeopleRepositoryMock } from '../../infrastructure/__mocks__/KeyPeopleRepositoryMock';
describe('KeyPeopleCreator', () => {
  let repository: KeyPeopleRepositoryMock;
  let creator: KeyPeopleCreator;

  beforeEach(() => {
    repository = new KeyPeopleRepositoryMock();
    creator = new KeyPeopleCreator(repository);
  });
  it('should create a new valid key people', async () => {
    const creatorRequest = KeyPeopleCreatorMother.random();

    const keyPeople = KeyPeopleMother.fromRequest(creatorRequest);

    await creator.run(creatorRequest);
    keyPeople.createdAt = undefined;
    keyPeople.updatedAt = undefined;

    repository.assertSaveHaveBeenCalledWidth(keyPeople);
  });

  it('should throw an error if key people email is not valid', async () => {
    expect(() => {
      const creatorRequest = KeyPeopleCreatorMother.invalidEmailRequest();
      const keyPeople = KeyPeopleMother.fromRequest(creatorRequest);

      creator.run(creatorRequest);

      repository.assertSaveHaveBeenCalledWidth(keyPeople);
    }).toThrowError();
  });

  it('should throw an error if key people id is not valid', async () => {
    expect(() => {
      const creatorRequest = KeyPeopleCreatorMother.invalidIdRequest();
      const keyPeople = KeyPeopleMother.fromRequest(creatorRequest);

      creator.run(creatorRequest);

      repository.assertSaveHaveBeenCalledWidth(keyPeople);
    }).toThrowError();
  });
});
