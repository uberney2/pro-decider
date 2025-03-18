import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KeyPeopleController } from './keypeople.controller';
import { infrastructure } from '../../context/KeyPeople/index';
import { KeyPeopleTypeOrmRepository } from '../../context/KeyPeople/infrastructure/index';
import { AccountsModule } from '../accounts/account.module';
import { KeyPeopleCreator, KeyPeopleFinder, KeyPeopleRemover } from '../../context/KeyPeople/application';

const { KeyPeopleEntity } = infrastructure;

@Module({
  imports: [
    TypeOrmModule.forFeature([KeyPeopleEntity]),
    forwardRef(() => AccountsModule),
  ],
  controllers: [KeyPeopleController],
  providers: [
    {
      provide: 'KeyPeopleRepository',
      useClass: KeyPeopleTypeOrmRepository,
    },
    KeyPeopleCreator,
    KeyPeopleFinder,
    KeyPeopleRemover,
  ],
  exports: [
    'KeyPeopleRepository', // Exportamos el token en lugar de la clase
    KeyPeopleCreator,
    KeyPeopleFinder,
    KeyPeopleRemover,
  ],
})
export class KeyPeopleModule {}
