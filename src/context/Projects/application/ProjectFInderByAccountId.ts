import { Inject } from '@nestjs/common';
import { AccountId } from '../../Accounts/domain';
import { Project } from '../domain/Project';
import { ProjectRepository } from '../domain/ProjectRepository';

export class ProjectFInderByAccountId {
  constructor(
    @Inject('ProjectRepository')
    private readonly projectRepository: ProjectRepository
  ) {}

  async run(idAccount: string): Promise<Project[]> {
    const newAccountId = new AccountId(idAccount);
    return await this.projectRepository.findAllProjectsByAccountId(
      newAccountId
    );
  }
}
