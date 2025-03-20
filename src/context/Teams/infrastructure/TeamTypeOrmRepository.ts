import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { ProjectId } from '../../Projects/domain';
import { ProjectEntity } from '../../Projects/infrastructure';
import { Nullable } from '../../Shared/domain/Nullable';
import { Status } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import { Team, TeamId, TeamRepository } from '../domain';
import { TeamEntity } from './typeorm/TeamEntity';

@Injectable()
export class TeamTypeOrmRepository implements TeamRepository {
  constructor(
    @InjectRepository(TeamEntity)
    private readonly teamEntityRepository: Repository<TeamEntity>,
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>
  ) {}

  async insert(team: Team): Promise<Team> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: team.projectId.value,
    });
    const teamEntity = this.toEntity(team, projectEntity);

    await this.teamEntityRepository.insert(teamEntity);

    return team;
  }

  async findById(id: TeamId): Promise<Nullable<Team>> {
    const teamFound = await this.teamEntityRepository.findOneBy({
      id: id.value,
    });

    return (
      teamFound &&
      Team.fromPrimitives({ ...teamFound, projectId: teamFound.project.id })
    );
  }

  async update(team: Team): Promise<boolean> {
    const projectEntity = await this.projectRepository.findOneBy({
      id: team.projectId.value,
    });
    const teamEntity = this.toEntity(team, projectEntity);
    delete teamEntity.project.name;
    const updateResult: UpdateResult = await this.teamEntityRepository.update(
      { id: teamEntity.id },
      teamEntity
    );
    return Boolean(updateResult.affected);
  }

  async findByParam(param: ProjectId): Promise<Team> {
    const teamFound = await this.teamEntityRepository.findOne({
      where: { project: { id: param.value } },
      relations: [],
    });

    return (
      teamFound &&
      Team.fromPrimitives({ ...teamFound, projectId: teamFound.project.id })
    );
  }

  private toEntity(team: Team, project: ProjectEntity): TeamEntity {
    const entity = new TeamEntity();

    entity.id = team.id.value;
    entity.project = project;
    entity.composition = team.composition.value;
    entity.teamConfiguration = team.teamConfiguration.value;
    entity.englishLevel = team.englishLevel.value;
    entity.deployDate = team.deployDate.value;
    entity.observations = team.observations.value;
    entity.status = team.status.value as Status;

    return entity;
  }
}
