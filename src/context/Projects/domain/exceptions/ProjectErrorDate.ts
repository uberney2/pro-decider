import { Project } from '../Project';

export class ProjectErrorDate extends Error {
  constructor(project: Project) {
    super(
      `the end date cannot be less than the start date. start date:${project.pursuitStartDate}, end date: ${project.pursuitEndDate}`
    );
  }
}
