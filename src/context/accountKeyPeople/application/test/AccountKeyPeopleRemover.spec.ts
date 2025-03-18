import { AccountRepositoryMock } from '../../../Accounts/infrastructure/_mocks_/AccountRepositoryMock';
import { KeyPeopleRepositoryMock } from '../../../KeyPeople/infrastructure/__mocks__/KeyPeopleRepositoryMock';
import { AccountKeyPeopleRepositoryMock } from '../../infrastructure/_mocks_/AccountKeyPeopleRepositoryMock';
import { AccountKeyPeopleRemover } from '../AccountKeyPeopleRemover';
import { AccountKeyPeopleMother } from '../../../Shared/domain/mother-creators/accountKeyPeople/AccountKeyPeopleMother';
import { AccountKeyPeopleNotRemoved } from '../../domain/exceptions';
import { AccountNotFound } from '../../../Accounts/domain/exceptions';
import { AccountMother } from '../../../Shared/domain/mother-creators/Accounts/AccountMother';
import { KeyPeopleMother } from '../../../Shared/domain/mother-creators/KeyPeople/KeyPeopleMother';
import { KeyPeopleNotFound } from '../../../KeyPeople/domain/exceptions';

describe('AccountKeyPeopleRemover', () => {
  let repository: AccountKeyPeopleRepositoryMock;
  let accountRepository: AccountRepositoryMock;
  let keyPeopleRepository: KeyPeopleRepositoryMock;

  let remover: AccountKeyPeopleRemover;

  beforeEach(() => {
    repository = new AccountKeyPeopleRepositoryMock();
    accountRepository = new AccountRepositoryMock();
    keyPeopleRepository = new KeyPeopleRepositoryMock();

    remover = new AccountKeyPeopleRemover(
      repository,
      accountRepository,
      keyPeopleRepository
    );
  });

  it('should call the repository with proper params', async () => {
    const accountKeyPeople = AccountKeyPeopleMother.random();
    repository.populate([accountKeyPeople]);

    const { accountId, keyPeopleId } = accountKeyPeople;
    accountRepository.populate([AccountMother.fromFields({ id: accountId })]);
    keyPeopleRepository.populate([
      KeyPeopleMother.fromFields({ id: keyPeopleId }),
    ]);

    await remover.run(accountId.value, keyPeopleId.value);

    repository.assertRemoverHaveBeenCalledWidth(accountId, keyPeopleId);
  });

  it('should throw an error if it did not unlink any key person', async () => {
    try {
      const accountKeyPeople = AccountKeyPeopleMother.random();
      const { accountId, keyPeopleId } = accountKeyPeople;

      accountRepository.populate([AccountMother.fromFields({ id: accountId })]);
      keyPeopleRepository.populate([
        KeyPeopleMother.fromFields({ id: keyPeopleId }),
      ]);
      await remover.run(accountId.value, keyPeopleId.value);
    } catch (error) {
      expect(error).toBeInstanceOf(AccountKeyPeopleNotRemoved);
    }
  });

  it('should throw an error if the account does not exist', async () => {
    try {
      const accounts = [
        AccountMother.random(),
        AccountMother.random(),
        AccountMother.random(),
      ];

      accountRepository.populate(accounts);

      const accountKeyPeople = AccountKeyPeopleMother.random();
      const { accountId, keyPeopleId } = accountKeyPeople;

      repository.populate([
        AccountKeyPeopleMother.fromFields({
          keyPeopleId,
        }),
        AccountKeyPeopleMother.random(),
        AccountKeyPeopleMother.random(),
      ]);

      await remover.run(accountId.value, keyPeopleId.value);
    } catch (error) {
      expect(error).toBeInstanceOf(AccountNotFound);
    }
  });

  it('should throw an error if the key people record does not exist', async () => {
    try {
      const accountKeyPeople = AccountKeyPeopleMother.random();
      const { accountId, keyPeopleId } = accountKeyPeople;

      const keyPeople = [
        KeyPeopleMother.random(),
        KeyPeopleMother.random(),
        KeyPeopleMother.random(),
      ];

      const accounts = [
        AccountMother.fromFields({ id: accountId }),
        AccountMother.random(),
      ];

      keyPeopleRepository.populate(keyPeople);
      accountRepository.populate(accounts);

      repository.populate([
        AccountKeyPeopleMother.fromFields({
          accountId,
          keyPeopleId,
        }),
        AccountKeyPeopleMother.random(),
        AccountKeyPeopleMother.random(),
      ]);

      await remover.run(accountId.value, keyPeopleId.value);
    } catch (error) {
      expect(error).toBeInstanceOf(KeyPeopleNotFound);
    }
  });
});
