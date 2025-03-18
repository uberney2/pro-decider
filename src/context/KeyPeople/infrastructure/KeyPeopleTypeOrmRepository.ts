import { KeyPeople } from './../domain/KeyPeople';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { KeyPeopleEntity } from './typeorm/KeyPeopleEntity';
import { KeyPeopleRepository } from '../domain/KeyPeopleRepository';
import { KeyPeopleEmail, KeyPeopleId } from '../domain';
import { Nullable } from '../../Shared/domain/Nullable';

@Injectable()
export class KeyPeopleTypeOrmRepository implements KeyPeopleRepository {
  constructor(
    @InjectRepository(KeyPeopleEntity)
    private readonly keyPeopleEntityRepository: Repository<KeyPeopleEntity>
  ) {}

  async findById(id: KeyPeopleId): Promise<Nullable<KeyPeople>> {
    const keyPeopleFound = await this.keyPeopleEntityRepository.findOneBy({
      id: id.value,
    });

    return keyPeopleFound && KeyPeople.fromPrimitives(keyPeopleFound);
  }

  async remove(id: KeyPeopleId): Promise<boolean> {
    const deleteResults: DeleteResult =
      await this.keyPeopleEntityRepository.delete(id.value);

    return Boolean(deleteResults.affected);
  }

  async findAll(): Promise<KeyPeople[]> {
    const searchResult = await this.keyPeopleEntityRepository.find();
    return searchResult.map(KeyPeople.fromPrimitives);
  }

  async findByEmail(email: KeyPeopleEmail): Promise<Nullable<KeyPeople>> {
    const keyPeopleFound = await this.keyPeopleEntityRepository.findOneBy({
      email: email.value,
    });

    return keyPeopleFound && KeyPeople.fromPrimitives(keyPeopleFound);
  }

  async insert(keyPeople: KeyPeople): Promise<KeyPeople> {
    const keyPeopleEntity = this.toEntity(keyPeople);
    await this.keyPeopleEntityRepository.insert(keyPeopleEntity);
    return keyPeople;
  }

  private toEntity(keyPeople: KeyPeople): KeyPeopleEntity {
    const entity = new KeyPeopleEntity();

    entity.id = keyPeople.id.value;
    entity.name = keyPeople.name.value;
    entity.role = keyPeople.role.value;
    entity.email = keyPeople.email.value;

    return entity;
  }
}
