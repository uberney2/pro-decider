import { IntersectionType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateTeamDto } from './create-team-dto';

export class UpdateTeamDto extends PartialType(CreateTeamDto) {}

export class UpdateTeamFullDto extends IntersectionType(UpdateTeamDto) {}
