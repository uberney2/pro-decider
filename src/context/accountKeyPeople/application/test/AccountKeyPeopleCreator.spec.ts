import { AccountKeyPeopleCreator } from './../AccountKeyPeopleCreator';
import { AccountRepositoryMock } from '../../../Accounts/infrastructure/_mocks_/AccountRepositoryMock';
import { KeyPeopleRepositoryMock } from '../../../KeyPeople/infrastructure/__mocks__/KeyPeopleRepositoryMock';
import { AccountKeyPeopleRepositoryMock } from '../../infrastructure/_mocks_/AccountKeyPeopleRepositoryMock';
import { AccountKeyPeopleMother } from '../../../Shared/domain/mother-creators/accountKeyPeople/AccountKeyPeopleMother';
import { AccountMother } from '../../../Shared/domain/mother-creators/Accounts/AccountMother';
import { KeyPeopleMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleMother';

describe('AccountKeyPeopleCreator', () => {
  let repository: AccountKeyPeopleRepositoryMock;
  let accountRepository: AccountRepositoryMock;
  let keyPeopleRepository: KeyPeopleRepositoryMock;

  let creator: AccountKeyPeopleCreator;

  beforeEach(() => {
    repository = new AccountKeyPeopleRepositoryMock();
    accountRepository = new AccountRepositoryMock();
    keyPeopleRepository = new KeyPeopleRepositoryMock();

    creator = new AccountKeyPeopleCreator(
      repository,
      accountRepository,
      keyPeopleRepository
    );
  });

  it.skip('Should call the repository with proper params', async () => {
    const account = AccountMother.random();
    const keyPeople = KeyPeopleMother.random();

    accountRepository.populate([account]);
    keyPeopleRepository.populate([keyPeople]);

    const accountKeyPeopleData = AccountKeyPeopleMother.fromFields({
      accountId: account.id,
      keyPeopleId: keyPeople.id,
    });

    const recordCreated = await creator.run(
      accountKeyPeopleData.toPrimitives()
    );
    repository.assertCreatorHaveBeenCalledWidth(recordCreated.id);
  });
});
