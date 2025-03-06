import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { EnvironmentConfigService } from '../config/environment/environment.service';
import { PortfolioEntity } from '../../../Portfolio/infrastructure';


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
    PortfolioEntity
  ],
  synchronize: config.getDatabaseSync(),
});
