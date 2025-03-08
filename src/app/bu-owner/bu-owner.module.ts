import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { infrastructure } from '../../context/BuOwner/index';
import { BuOwnerController } from './bu-owner.controller';
import { BuOwnerTypeOrmRepository } from '../../context/BuOwner/infrastructure/index'
import { BuOwnerFinderAll } from '../../context/BuOwner/application/index'

const { BuOwnerEntity } = infrastructure;

@Module({
  imports: [TypeOrmModule.forFeature([BuOwnerEntity])],
  controllers: [BuOwnerController],
  providers: [
    {
      provide: 'BuOwnerRepository',
      useClass: BuOwnerTypeOrmRepository
    },
    BuOwnerFinderAll
  ],
})
export class BuOwnerModule { }
