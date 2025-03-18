import { BuOwnerCreator } from '../BuOwnerCreator';
import { BuOwnerMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerMother';
import { BuOwnerRepositoryMock } from '../../infrastructure/__mocks__/BuOwnerRepositoryMock';
import { BuOwnerIdMother } from '../../../Shared/domain/mother-creators/BuOwner/BuOwnerIdMother';
import { BuOwnerAlreadyExists } from '../../domain/exceptions';

describe('BuOwner Creator', () => {
  let repository: BuOwnerRepositoryMock;
  let creator: BuOwnerCreator;

  beforeEach(() => {
    repository = new BuOwnerRepositoryMock();
    creator = new BuOwnerCreator(repository);
  });

  it('should call the repository with proper params', async () => {
    const id = BuOwnerIdMother.random();
    const buOwner = BuOwnerMother.fromFields({ id });

    await creator.run(buOwner.toPrimitives());

    repository.assertSaveHaveBeenCalledWidth(buOwner);
  });
  it('should throw an error when buOwner already exist', async () => {
    try {
      const id = BuOwnerIdMother.random();
      const buOwner = BuOwnerMother.fromFields({ id });

      repository.populate([buOwner]);

      await creator.run(buOwner.toPrimitives());
    } catch (error) {
      expect(error).toBeInstanceOf(BuOwnerAlreadyExists);
    }
  });
});
