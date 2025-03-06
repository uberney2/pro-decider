import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '../../context/Portfolio/index';
import { PortfolioController } from './portfolio.controller';
import { PortfolioTypeOrmRepository } from '../../context/Portfolio/infrastructure/index'
import { PortfolioFinderAll } from '../../context/Portfolio/application/PortfolioFinderAll'

const { PortfolioEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([PortfolioEntity])],
  controllers: [PortfolioController],
  providers: [{
    provide: 'PortfolioRepository',
    useClass: PortfolioTypeOrmRepository
  },
    PortfolioFinderAll
  ],
})
export class PortfolioModule {}
