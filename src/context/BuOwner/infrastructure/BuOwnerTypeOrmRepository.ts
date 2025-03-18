import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BuOwner } from '../domain';
import { BuOwnerRepository } from '../domain/BuOwnerRepository';
import { BuOwnerEntity } from './typeorm/BuOwnerEntity';

@Injectable()
export class BuOwnerTypeOrmRepository implements BuOwnerRepository {
  constructor(
    @InjectRepository(BuOwnerEntity)
    private readonly buOwnerEntityRepository: Repository<BuOwnerEntity>
  ) {}

  async findAll(): Promise<BuOwner[]> {
    const searchResult = await this.buOwnerEntityRepository.find();
    return searchResult.map<BuOwner>(BuOwner.fromPrimitives);
  }

  async insert(buOwner: BuOwner): Promise<BuOwner> {
    const buOwnerEntity = this.toEntity(buOwner);
    await this.buOwnerEntityRepository.insert(buOwnerEntity);
    return buOwner;
  }

  async findOne(buOwner: BuOwner): Promise<BuOwner> {
    const buOwnerFound = await this.buOwnerEntityRepository.findOneBy(
      buOwner.toPrimitives()
    );

    return buOwnerFound && BuOwner.fromPrimitives(buOwnerFound);
  }

  private toEntity(keyPeople: BuOwner): BuOwnerEntity {
    const entity = new BuOwnerEntity();

    entity.id = keyPeople.id.value;
    entity.name = keyPeople.name.value;

    return entity;
  }
}
