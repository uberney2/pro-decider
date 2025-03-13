import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountController } from './account.controller';

import { infrastructure as keyPeopleInfrastructure } from '../../context/KeyPeople';
import { infrastructure as accountInfrastructure } from '../../context/Accounts';
import { infrastructure as accountKeyPeopleInfrastructure } from '../../context/accountKeyPeople';

import {
  AccountCreator,
  AccountFinderAll,
  AccountFinderAllByPortfolioId,
  AccountFinderByParam,
  AccountUpdater
} from '../../context/Accounts/application'

import {
  AccountKeyPeopleCreator,
  AccountKeyPeopleRemover,
  AccountKeyPeopleUpdaterImportance,
  KeyPeopleGetterByAccount
} from '../../context/accountKeyPeople/application'
import { AccountTypeOrmRepository } from '../../context/Accounts/infrastructure';
import { AccountKeyPeopleTypeOrmRepository } from '../../context/accountKeyPeople/infrastructure';
import { KeyPeopleModule } from '../key-people/keypeople.module';

const { KeyPeopleEntity } = keyPeopleInfrastructure;
const { AccountEntity } = accountInfrastructure;
const { AccountKeyPeopleEntity } = accountKeyPeopleInfrastructure;

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AccountEntity,
      AccountKeyPeopleEntity,
      KeyPeopleEntity,
    ]),
    KeyPeopleModule,
  ],
  controllers: [AccountController],
  providers: [
    {
        provide: 'AccountRepository',
        useClass: AccountTypeOrmRepository
    },
    {
      provide: 'AccountKeyPeopleRepository',
      useClass: AccountKeyPeopleTypeOrmRepository
  },
    AccountCreator,
    AccountFinderAll,
    AccountFinderAllByPortfolioId,
    AccountFinderByParam,
    AccountKeyPeopleRemover,
    AccountUpdater,
    KeyPeopleGetterByAccount,
    AccountKeyPeopleUpdaterImportance,
    AccountKeyPeopleCreator,
    ,
    AccountKeyPeopleTypeOrmRepository
  ],
})
export class AccountsModule {}
