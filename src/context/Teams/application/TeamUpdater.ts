import { TeamCreatorRequest } from './TeamCreatorRequest';
import { ProjectRepository } from '../../Projects/domain';
import { Team, TeamRepository } from '../domain';
import { TeamNotUpdated, TeamNotFound } from '../domain/exceptions';
import { BaseDimension } from '../../Shared/domain/dimension/application/BaseDimension';
import { ProjectNotFound } from '../../Projects/domain/exceptions';

export class TeamUpdater extends BaseDimension {
  constructor(
    protected projectRepository: ProjectRepository,
    protected teamRepository: TeamRepository
  ) {
    super(teamRepository);
  }

  async run(teamRequest: TeamCreatorRequest): Promise<Team> {
    const teamObject = Team.fromPrimitives(teamRequest);

    await this.ensureDimensionExist(
      this.projectRepository,
      teamObject.projectId,
      ProjectNotFound
    );
    await this.ensureDimensionExist(
      this.teamRepository,
      teamObject.id,
      TeamNotFound
    );

    const isUpdated = await this.teamRepository.update(teamObject);

    if (!isUpdated) {
      throw new TeamNotUpdated(teamObject.id);
    }
    return this.teamRepository.findById(teamObject.id);
  }
}
