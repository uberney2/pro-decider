import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../config/environment/environment.service';
import { PortfolioEntity } from '../../../Portfolio/infrastructure';
import { BuOwnerEntity } from '../../../BuOwner/infrastructure';
import { AccountEntity } from 'src/context/Accounts/infrastructure';
import { KeyPeopleEntity } from 'src/context/KeyPeople/infrastructure';
import { AccountKeyPeopleEntity } from 'src/context/accountKeyPeople/infrastructure';
import { GutEntity } from 'src/context/Gut';
import { PlanEntity } from 'src/context/Plans';
import { ProcessEntity } from 'src/context/Processes';
import { ProjectEntity } from 'src/context/Projects/infrastructure';
import { QaEntity } from 'src/context/QA';
import { TeamEntity } from 'src/context/Teams';
import { AuthPeopleEntity } from 'src/context/AuthPeople/infrastructure/typeorm/AuthPeopleEntity';


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
    AccountKeyPeopleEntity,
    GutEntity,
    PlanEntity,
    ProcessEntity,
    ProjectEntity,
    QaEntity,
    TeamEntity,
    AuthPeopleEntity
  ],
  synchronize: config.getDatabaseSync(),
});
