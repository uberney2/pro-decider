import { Account } from './../domain/Account';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { AccountEntity, AccountStatus } from './typeorm/AccountEntity';
import { AccountRepository } from '../domain/AccountRepository';
import { AccountId } from '../domain/AccountId';
import {
  AccountWithKeyPeople,
  AccountWithKeyPeoplePrimitiveType,
} from '../domain/AccountWithKeyPeople';
import { AccountName } from '../domain';
import { PortfolioId } from '../../Portfolio/domain/PortfolioId';

@Injectable()
export class AccountTypeOrmRepository implements AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly accountRepository: Repository<AccountEntity>
  ) {}

  async insert(account: Account): Promise<Account> {
    const accountEntity = this.toEntity(account);
    await this.accountRepository.insert(accountEntity);
    return Account.fromPrimitives(accountEntity);
  }

  async findAll(): Promise<Array<AccountWithKeyPeople>> {
    const dbRecords = await this.accountRepository.find({
      relations: [
        'buOwner',
        'portfolio',
        'accountKeyPeople',
        'accountKeyPeople.keyPeople',
      ],
    });
    return dbRecords
      .map(this.toAccountWithKeyPeople.bind(this))
      .map(AccountWithKeyPeople.fromPrimitives);
  }

  async findAllByPortfolioId(portfolioId: PortfolioId) {
    const dbRecords = await this.accountRepository
      .createQueryBuilder('accounts')
      .leftJoinAndSelect('accounts.portfolio', 'portfolio')
      .leftJoinAndSelect('accounts.buOwner', 'buOwner')
      .leftJoinAndSelect('accounts.accountKeyPeople', 'accountKeyPeople')
      .where('portfolio.id = :portfolioId', { portfolioId: portfolioId.value })
      .getMany();

    return dbRecords
      .map(this.toAccountWithKeyPeople.bind(this))
      .map(AccountWithKeyPeople.fromPrimitives);
  }

  async findByParam(param: AccountId | AccountName): Promise<Account> {
    let dbRecords;
    if (param instanceof AccountId) {
      dbRecords = await this.accountRepository.findOne({
        where: { id: param.value },
        relations: ['buOwner', 'portfolio'],
      });
      return dbRecords && Account.fromPrimitives(dbRecords);
    }
    dbRecords = await this.accountRepository.findOne({
      where: { name: param.value },
    });

    return dbRecords && Account.fromPrimitives(dbRecords);
  }

  async update(account: Account): Promise<boolean> {
    const accountEntity = this.toEntity(account);
    const updateResult: UpdateResult = await this.accountRepository.update(
      { id: accountEntity.id },
      accountEntity
    );
    return Boolean(updateResult.affected);
  }

  private toKeyPeopleWithNotes(accountKeyPeople) {
    return { ...accountKeyPeople.keyPeople, note: accountKeyPeople.notes };
  }

  private toAccountWithKeyPeople(account): AccountWithKeyPeoplePrimitiveType {
    const mappedAccount = {
      ...account,
      keyPeopleWithNotes: account.accountKeyPeople.map(
        this.toKeyPeopleWithNotes.bind(this)
      ),
    };
    delete mappedAccount.accountKeyPeople;
    return mappedAccount as AccountWithKeyPeoplePrimitiveType;
  }

  private toEntity(account: Account): AccountEntity {
    const entity = new AccountEntity();
    entity.id = account.id.value;
    entity.name = account.name.value;
    entity.status = account.status?.value as AccountStatus;
    entity.salesforceLink = account.salesforceLink?.value;
    entity.pcsLink = account.pcsLink?.value;
    entity.strategy = account.strategy?.value;
    entity.portfolio = account.portfolio?.toPrimitives();
    entity.buOwner = account.buOwner?.toPrimitives();

    return entity;
  }
}
