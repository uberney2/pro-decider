import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../config/environment/environment.service';
import { PortfolioEntity } from '../../../Portfolio/infrastructure';
import { BuOwnerEntity } from '../../../BuOwner/infrastructure';
import { AccountEntity } from 'src/context/Accounts/infrastructure';
import { KeyPeopleEntity } from 'src/context/KeyPeople/infrastructure';
import { AccountKeyPeopleEntity } from 'src/context/accountKeyPeople/infrastructure';


export const getTypeOrmOptions = (
  config: EnvironmentConfigService
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: config.getDatabaseHost(),
  port: config.getDatabasePort(),
  username: config.getDatabaseUser(),
  password: config.getDatabasePassword(),
  database: config.getDatabaseName(),
  entities: [
    PortfolioEntity,
    BuOwnerEntity,
    AccountEntity,
    KeyPeopleEntity,
    AccountKeyPeopleEntity
  ],
  synchronize: config.getDatabaseSync(),
});
