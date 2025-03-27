import { jest, expect } from '@jest/globals';
import { ProjectId } from '../../../Projects/domain';
import { Team, TeamId, TeamRepository } from '../../domain';

export class TeamRepositoryMock implements TeamRepository {
  private insertMock: jest.Mock<typeof this.insert>;
  private findByIdMock: jest.Mock<typeof this.findById>;
  private findByParamMock: jest.Mock<typeof this.findById>;

  private team: Array<Team> = [];

  constructor() {
    this.insertMock = jest.fn(async (entity: Team) => Promise.resolve(entity));

    this.findByIdMock = jest.fn(async () => {
      return Promise.resolve(this.team[0]);
    });

    this.findByParamMock = jest.fn(async () => {
      return Promise.resolve(this.team[0]);
    });
  }

  async findById(id: TeamId): Promise<Team> {
    await this.findByIdMock(id);
    return this.team.find((team) => team.id.equals(id));
  }

  async findByParam(id: ProjectId): Promise<Team> {
    await this.findByParamMock(id);
    return this.team.find((team) => team.id.equals(id));
  }

  insert(entity: Team): Promise<Team> {
    return this.insertMock(entity);
  }

  update(entity: Team): Promise<boolean> {
    return;
  }

  assertSaveHaveBeenCalledWith(expectedTeam: Team): void {
    expect(this.insertMock).toHaveBeenCalledWith(expectedTeam);
  }

  assertFindByIdHaveBeenCalled(): void {
    expect(this.findById).toBeCalled();
  }
}
