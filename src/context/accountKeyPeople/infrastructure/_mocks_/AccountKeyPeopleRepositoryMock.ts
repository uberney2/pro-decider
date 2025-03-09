import { AccountKeyPeopleRepository } from '../../domain/AccountKeyPeopleRepository';
import { jest, expect } from '@jest/globals';
import { AccountKeyPeople, AccountKeyPeopleId } from '../../domain';
import { AccountId } from '../../../Accounts/domain';
import { KeyPeopleWithNotes, KeyPeopleId } from '../../../KeyPeople/domain';
import { AccountKeyPeopleNotes } from '../../domain/AccountKeyPeopleNotes';

export class AccountKeyPeopleRepositoryMock
  implements AccountKeyPeopleRepository
{
  private insertMock: jest.Mock<typeof this.insert>;
  private findAllMock: jest.Mock<() => Promise<AccountKeyPeople[]>>;
  private removeMock: jest.Mock<typeof this.remove>;
  private createMock: jest.Mock<typeof this.create>;
  private findKeyPeopleByAccountIdMock: jest.Mock<
    typeof this.findKeyPeopleByAccountId
  >;
  private updateMock: jest.Mock<typeof this.update>;
  private accountKeyPeople: Array<AccountKeyPeople> = [];

  constructor() {
    this.insertMock = jest.fn(async (entity: AccountKeyPeople) =>
      Promise.resolve(entity)
    );

    this.findAllMock = jest.fn(async () => {
      const result: AccountKeyPeople[] = [];
      return Promise.resolve(result);
    });

    this.removeMock = jest.fn(async () => {
      return Promise.resolve(true);
    });

    this.updateMock = jest.fn(async () => {
      return Promise.resolve(true);
    });
  }

  async remove(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): Promise<boolean> {
    await this.removeMock(accountId, keyPeopleId);
    return Boolean(
      this.accountKeyPeople.find(
        (keyPerson) =>
          keyPerson.accountId.equals(accountId) &&
          keyPerson.keyPeopleId.equals(keyPeopleId)
      )
    );
  }

  async create(accountKeyPeopleId: AccountKeyPeopleId): Promise<boolean> {
    await this.createMock(accountKeyPeopleId);

    return true;
  }

  findKeyPeopleByAccountId(
    accountId: AccountId
  ): Promise<KeyPeopleWithNotes[]> {
    return this.findKeyPeopleByAccountIdMock(accountId);
  }

  insert(entity: AccountKeyPeople): Promise<AccountKeyPeople> {
    return this.insertMock(entity);
  }

  update(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    note: AccountKeyPeopleNotes
  ): Promise<boolean> {
    return this.updateMock(accountId, keyPeopleId, note);
  }

  findAll(): Promise<AccountKeyPeople[]> {
    return this.findAllMock();
  }

  populate(accountKeyPeople: Array<AccountKeyPeople>) {
    this.accountKeyPeople = accountKeyPeople;
  }

  assertSaveHaveBeenCalledWidth(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): void {
    expect(this.insertMock).toHaveBeenCalledWith(accountId, keyPeopleId);
  }

  assertRemoverHaveBeenCalledWidth(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): void {
    expect(this.removeMock).toHaveBeenCalledWith(accountId, keyPeopleId);
  }

  assertCreatorHaveBeenCalledWidth(
    accountKeyPeopleId: AccountKeyPeopleId
  ): void {
    expect(this.create).toHaveBeenCalledWith(accountKeyPeopleId);
  }

  assertFindKeyPeopleByAccountIdHaveBeenCalledWidth(
    expectedAccountId: AccountId
  ): void {
    expect(this.findKeyPeopleByAccountIdMock).toHaveBeenCalledWith(
      expectedAccountId
    );
  }

  assertFindHaveBeenCalled(): void {
    expect(this.findAllMock).toBeCalled();
  }
}
