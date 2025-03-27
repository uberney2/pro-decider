import { Team } from '../Team';

export class TeamAlreadyExists extends Error {
  constructor(teamDimension: Team) {
    super(`This Team Dimension already exists: ${teamDimension.id.value}`);
  }
}
