import { Team, TeamPrimitiveType } from '../../../context/Teams';
import { UpdateTeamDto, UpdateTeamFullDto } from './dto/update-team-dto';

export class TeamMapper {
  static toPrimitives(team: Team): TeamPrimitiveType {
    return {
      id: team.id.value,
      projectId: team.projectId.value,
      composition: team.composition.value,
      teamConfiguration: team.teamConfiguration.value,
      englishLevel: team.englishLevel.value,
      deployDate: team.deployDate.value,
      status: team.status.value,
      observations: team.observations.value,
    };
  }

  static toFullTeamDto(teamWithOutId: UpdateTeamDto): UpdateTeamFullDto {
    const fullTeam: UpdateTeamFullDto = {
      id: teamWithOutId.id,
      composition: teamWithOutId.composition,
      teamConfiguration: teamWithOutId.teamConfiguration,
      englishLevel: teamWithOutId.englishLevel,
      observations: teamWithOutId.observations,
      deployDate: teamWithOutId.deployDate,
      status: teamWithOutId.status,
    };
    return fullTeam;
  }
}
