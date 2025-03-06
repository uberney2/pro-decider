import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PortfolioModule } from './app/portfolio/portfolio.module';
import { infrastructure as sharedInfrastructure } from './context/Shared/index';

const { PersistanceModule } = sharedInfrastructure;

@Module({
  imports: [
    PersistanceModule,
    PortfolioModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
