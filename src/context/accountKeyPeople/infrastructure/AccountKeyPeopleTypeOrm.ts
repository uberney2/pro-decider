import { Injectable } from '@nestjs/common';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountKeyPeople } from '../domain/AccountKeyPeople';
import { AccountKeyPeopleEntity } from './typeorm/AccountKeyPeopleEntity';
import { AccountKeyPeopleRepository } from '../domain/AccountKeyPeopleRepository';
import { AccountId } from '../../Accounts/domain';
import { KeyPeopleId, KeyPeopleWithNotes } from '../../KeyPeople/domain';
import { AccountKeyPeopleNotes } from '../domain/AccountKeyPeopleNotes';

@Injectable()
export class AccountKeyPeopleTypeOrmRepository
  implements AccountKeyPeopleRepository
{
  constructor(
    @InjectRepository(AccountKeyPeopleEntity)
    private readonly accountKeyPeopleRepository: Repository<AccountKeyPeopleEntity>
  ) {}

  async remove(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId
  ): Promise<boolean> {
    const deleteResults: DeleteResult =
      await this.accountKeyPeopleRepository.delete({
        keyPeopleId: keyPeopleId.value,
        accountId: accountId.value,
      });

    return Boolean(deleteResults.affected);
  }

  async insert(accountKeyPeople: AccountKeyPeople): Promise<AccountKeyPeople> {
    const accountKeyPeopleEntity = this.toEntity(accountKeyPeople);
    await this.accountKeyPeopleRepository.insert(accountKeyPeopleEntity);
    return accountKeyPeople;
  }

  async findAll(): Promise<AccountKeyPeople[]> {
    const result = await this.accountKeyPeopleRepository
      .createQueryBuilder('accountKeyPeople')
      .leftJoinAndSelect('accountKeyPeople.account.', 'account')
      .leftJoinAndSelect('accountKeyPeople.keyPeople', 'keyPeople')
      .getMany();

    return result.map(AccountKeyPeople.fromPrimitives);
  }

  async findKeyPeopleByAccountId(
    accountId: AccountId
  ): Promise<KeyPeopleWithNotes[]> {
    const records = await this.accountKeyPeopleRepository.find({
      where: { accountId: accountId.value },
      relations: ['keyPeople'],
    });

    return records.map(({ keyPeople, notes: note }) =>
      KeyPeopleWithNotes.fromPrimitives({ ...keyPeople, note })
    );
  }

  async update(
    accountId: AccountId,
    keyPeopleId: KeyPeopleId,
    note: AccountKeyPeopleNotes
  ): Promise<boolean> {
    const updateResult: UpdateResult =
      await this.accountKeyPeopleRepository.update(
        {
          accountId: accountId.value,
          keyPeopleId: keyPeopleId.value,
        },
        { notes: note.value }
      );
    return Boolean(updateResult.affected);
  }

  private toEntity(accountKeyPeople: AccountKeyPeople): AccountKeyPeopleEntity {
    const entity = new AccountKeyPeopleEntity();
    entity.id = accountKeyPeople.id.value;
    entity.accountId = accountKeyPeople.accountId.value;
    entity.keyPeopleId = accountKeyPeople.keyPeopleId.value;
    entity.notes = accountKeyPeople.notes.value;
    return entity;
  }
}
