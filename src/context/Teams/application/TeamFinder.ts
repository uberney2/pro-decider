import { Inject } from '@nestjs/common';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Team, TeamRepository } from '../domain';
import { TeamNotFound } from '../domain/exceptions/TeamNotFound';

export class TeamFinder extends DimensionValidations {
  constructor(
    @Inject('TeamRepository')
    private readonly repository: TeamRepository,

    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(param: string): Promise<Team> {
    const projectId = new ProjectId(param);

    await this.ensureProjectExists(projectId);

    const team = await this.repository.findByParam(projectId);

    if (!team) {
      throw new TeamNotFound(projectId);
    }

    return team;
  }
}
