import { TeamCreatorRequest } from './TeamCreatorRequest';
import { Team, TeamRepository, exceptions } from '../domain';
import { ProjectId, ProjectRepository } from '../../Projects/domain';
import { DimensionValidations } from '../../Shared/application/dimension/DimensionValidations';
import { Inject } from '@nestjs/common';

export class TeamCreator extends DimensionValidations {
  constructor(
    @Inject('TeamRepository')
    private readonly repository: TeamRepository,
    
    @Inject('ProjectRepository')
    protected readonly projectRepository: ProjectRepository
  ) {
    super(projectRepository);
  }

  async run(request: TeamCreatorRequest): Promise<Team> {
    const projectId = new ProjectId(request.projectId);

    await this.ensureProjectExists(projectId);

    const newTeam = Team.fromPrimitives(request);

    const existingTeam = await this.repository.findById(newTeam.id);

    if (existingTeam) {
      throw new exceptions.TeamAlreadyExists(newTeam);
    }

    return this.repository.insert(newTeam);
  }
}
