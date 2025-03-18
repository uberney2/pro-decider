import { KeyPeopleRepository } from './../../domain/KeyPeopleRepository';
import { jest, expect } from '@jest/globals';

import { KeyPeople, KeyPeopleEmail, KeyPeopleId } from '../../domain';
import { Uuid } from '../../../Shared/domain/value-object/Uuid';
export class KeyPeopleRepositoryMock implements KeyPeopleRepository {
  private insertMock: jest.Mock<typeof this.insert>;
  private findMock: jest.Mock<typeof this.find>;
  private removeMock: jest.Mock<typeof this.remove>;
  private findByIdMock: jest.Mock<typeof this.findById>;
  private findAllMock: jest.Mock<() => Promise<KeyPeople[]>>;
  private findByEmailMock: jest.Mock<typeof this.findByEmail>;

  private keyPeople: Array<KeyPeople> = [];

  constructor() {
    this.insertMock = jest.fn(async (entity: KeyPeople) =>
      Promise.resolve(entity)
    );

    this.findAllMock = jest.fn(async () => {
      const result: KeyPeople[] = [];
      return Promise.resolve(result);
    });

    this.removeMock = jest.fn(async (id: KeyPeopleId) => {
      return Promise.resolve(!!id);
    });

    this.findByIdMock = jest.fn(async () => {
      return Promise.resolve(this.keyPeople[0]);
    });

    this.findByEmailMock = jest.fn(async () => {
      return Promise.resolve(this.keyPeople[0]);
    });
  }

  async findByEmail(keyPeopleEmail: KeyPeopleEmail): Promise<KeyPeople> {
    await this.findByEmailMock(keyPeopleEmail);
    return this.keyPeople.find((keyPerson) =>
      keyPerson.email.equals(keyPeopleEmail)
    );
  }

  async findById(id: KeyPeopleId): Promise<KeyPeople> {
    await this.findByIdMock(id);
    return this.keyPeople.find((keyPerson) => keyPerson.id.equals(id));
  }

  async remove(id: Uuid): Promise<boolean> {
    await this.removeMock(id);
    return Boolean(this.findById(id));
  }

  insert(entity: KeyPeople): Promise<KeyPeople> {
    return this.insertMock(entity);
  }

  findAll(): Promise<KeyPeople[]> {
    return this.findAllMock();
  }

  find(entity: KeyPeople): Promise<KeyPeople[]> {
    return this.findMock(entity);
  }

  populate(keyPeople: Array<KeyPeople>) {
    this.keyPeople = keyPeople;
  }

  assertRemoveHaveBeenCalledWidth(expectedKeyPeopleId: KeyPeopleId): void {
    expect(this.removeMock).toHaveBeenCalledWith(expectedKeyPeopleId);
  }

  assertSaveHaveBeenCalledWidth(expectedKeyPeople: KeyPeople): void {
    expect(this.insertMock).toHaveBeenCalledWith(expectedKeyPeople);
  }

  assertFindHaveBeenCalled(): void {
    expect(this.findAllMock).toBeCalled();
  }
}
