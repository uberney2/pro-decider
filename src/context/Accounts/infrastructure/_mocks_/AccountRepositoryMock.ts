import { Account, AccountId, AccountWithKeyPeople } from '../../domain';
import { PortfolioId } from '../../../Portfolio/domain';
import { AccountRepository } from '../../domain/AccountRepository';
import { jest, expect } from '@jest/globals';
import { AccountMother } from '../../../Shared/domain/mother-creators/Accounts/AccountMother';

export class AccountRepositoryMock implements AccountRepository {
  private insertMock: jest.Mock<typeof this.insert>;
  private findByParamMock: jest.Mock<typeof this.findByParam>;
  private findAllMock: jest.Mock<() => Promise<Account[]>>;
  private findAllByPortfolioIdMock: jest.Mock<typeof this.findAllByPortfolioId>;
  private updateMock: jest.Mock<typeof this.update>;

  private accounts: Array<Account> = [];

  constructor() {
    this.insertMock = jest.fn(async (entity: Account) =>
      Promise.resolve(entity)
    );

    this.findAllMock = jest.fn(async () => {
      const result: AccountWithKeyPeople[] = [];
      return Promise.resolve(result);
    });

    this.findByParamMock = jest.fn(async () => {
      const account = AccountMother.random();
      const result: Account = account;
      return Promise.resolve(result);
    });

    this.updateMock = jest.fn(async () => {
      const account = AccountMother.random();
      const result: Account = account;
      return Promise.resolve(result);
    });
  }

  insert(entity: Account): Promise<Account> {
    return this.insertMock(entity);
  }

  update(entity: Account) {
    return this.updateMock(entity);
  }

  findAll(): Promise<(Account | AccountWithKeyPeople)[]> {
    return this.findAllMock();
  }

  findAllByPortfolioId(
    id: PortfolioId
  ): Promise<(Account | AccountWithKeyPeople)[]> {
    return this.findAllByPortfolioIdMock(id);
  }

  async findByParam(id: AccountId): Promise<Account> {
    await this.findByParamMock(id);
    return this.accounts.find((accounts) => accounts.id.equals(id));
  }

  populate(accounts: Array<Account>) {
    this.accounts = accounts;
  }

  assertSaveHaveBeenCalledWidth(expectedAccount: Account): void {
    expect(this.insertMock).toHaveBeenCalledWith(expectedAccount);
  }

  assertFindAllHaveBeenCalled(): void {
    expect(this.findAllMock).toBeCalled();
  }

  assertFindByParamHaveBeenCalled(): void {
    expect(this.findByParamMock).toBeCalled();
  }
}
