import { TeamId } from './../TeamId';

export class TeamNotFound extends Error {
  constructor(teamId: TeamId) {
    super(`Team with id: ${teamId} not found`);
  }
}
