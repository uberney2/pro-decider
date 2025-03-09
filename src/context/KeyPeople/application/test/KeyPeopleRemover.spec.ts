import { KeyPeopleMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleMother';
import { KeyPeopleRemover } from '../KeyPeopleRemover';
import { KeyPeopleRepositoryMock } from '../../infrastructure/__mocks__/KeyPeopleRepositoryMock';
import { KeyPeopleIdMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleIdMother';
import { KeyPeopleNotFound } from '../../domain/exceptions/KeyPeopleNotFound';

describe('KeyPeopleRemover', () => {
  let repository: KeyPeopleRepositoryMock;
  let remover: KeyPeopleRemover;

  beforeEach(() => {
    repository = new KeyPeopleRepositoryMock();
    remover = new KeyPeopleRemover(repository);
  });

  it('should remove a key person', async () => {
    const keyPeopleId = KeyPeopleIdMother.random();

    const keyPeople = [
      KeyPeopleMother.random(),
      KeyPeopleMother.random(),
      KeyPeopleMother.random(),
      KeyPeopleMother.fromFields({ id: keyPeopleId }),
    ];

    repository.populate(keyPeople);
    await remover.run(keyPeopleId.value);
    repository.assertRemoveHaveBeenCalledWidth(keyPeopleId);
  });

  it('should throw an error if it did not remove a key Person', async () => {
    try {
      const keyPeople = [KeyPeopleMother.random(), KeyPeopleMother.random()];

      repository.populate(keyPeople);

      const keyPeopleId = KeyPeopleIdMother.random();
      await remover.run(keyPeopleId.value);
    } catch (error) {
      expect(error).toBeInstanceOf(KeyPeopleNotFound);
    }
  });
});
