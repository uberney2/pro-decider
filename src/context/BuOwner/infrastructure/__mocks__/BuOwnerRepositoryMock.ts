import { BuOwnerRepository } from '../../domain/BuOwnerRepository';
import { jest, expect } from '@jest/globals';
import { BuOwner } from '../../domain';

export class BuOwnerRepositoryMock implements BuOwnerRepository {
  private insertMock: jest.Mock<typeof this.insert>;
  private findOneMock: jest.Mock<typeof this.findOne>;
  private findAllMock: jest.Mock<typeof this.findAll>;

  private buOwners: Array<BuOwner> = [];

  constructor() {
    this.insertMock = jest.fn(async (entity: BuOwner) =>
      Promise.resolve(entity)
    );

    this.findOneMock = jest.fn(async (entity: BuOwner) =>
      Promise.resolve(entity)
    );

    this.findAllMock = jest.fn(async () => {
      const result: BuOwner[] = [];
      return Promise.resolve(result);
    });
  }

  findOne(buOwner: BuOwner): Promise<BuOwner> {
    const buOwnerFounded = this.buOwners.find(
      (bu) => bu.id.value === buOwner.id.value
    );
    return this.findOneMock(buOwnerFounded);
  }

  insert(entity: BuOwner): Promise<BuOwner> {
    return this.insertMock(entity);
  }

  findAll(): Promise<BuOwner[]> {
    return this.findAllMock();
  }

  populate(buOwners: Array<BuOwner>) {
    this.buOwners = buOwners;
  }

  assertSaveHaveBeenCalledWidth(buOwner: BuOwner): void {
    expect(this.insertMock).toHaveBeenCalledWith(buOwner);
  }

  assertFindOneBeenCalledWith(buOwner: BuOwner): void {
    expect(this.findOneMock).toHaveBeenCalledWith(buOwner);
  }
  assertFindAllHaveBeenCalled(): void {
    expect(this.findAllMock).toBeCalled();
  }
}
