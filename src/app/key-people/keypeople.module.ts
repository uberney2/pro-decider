import {
  KeyPeopleCreator,
  KeyPeopleFinder,
  KeyPeopleRemover,
} from '../../context/KeyPeople/application';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { KeyPeopleController } from './keypeople.controller';
import { infrastructure } from '../../context/KeyPeople/index';
import { KeyPeopleTypeOrmRepository } from '../../context/KeyPeople/infrastructure/index'

const { KeyPeopleEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([KeyPeopleEntity])],
  controllers: [KeyPeopleController],
  providers: [
    {
        provide: 'KeyPeopleRepository',
        useClass: KeyPeopleTypeOrmRepository
      },
    ,
    KeyPeopleCreator,
    KeyPeopleFinder,
    KeyPeopleRemover,
  ],
  exports: [KeyPeopleTypeOrmRepository],
})
export class KeyPeopleModule {}
