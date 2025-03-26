import { IntersectionType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';
import { CreateTeamDto } from '../team/dto/create-team-dto';
import { CreatePlanDto } from '../plan/dto/create-plan-dto';
import { CreateProcessDto } from '../process/dto/create-process-dto';
import { CreateGutDto } from '../gut/dto/create-gut-dto';
import { CreateQADto } from '../qa/dto/create-qa-dto';

export class ProjectsResponse extends IntersectionType(CreateProjectDto) {
  team?: CreateTeamDto;
  plan?: CreatePlanDto;
  process?: CreateProcessDto;
  gut?: CreateGutDto;
  qa?: CreateQADto;
}
