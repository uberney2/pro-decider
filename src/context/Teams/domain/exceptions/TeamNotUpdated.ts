import { TeamId } from '../TeamId';

export class TeamNotUpdated extends Error {
  constructor(teamId: TeamId) {
    super(`The team with id: ${teamId} could not be updated`);
  }
}
