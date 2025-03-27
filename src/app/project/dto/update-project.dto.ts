import { IntersectionType, PartialType } from '@nestjs/mapped-types';
import { CreateProjectDto } from './create-project.dto';

export class UpdateProjectDto extends PartialType(CreateProjectDto) {}

export class UpdateProjectFullDto extends IntersectionType(CreateProjectDto) {}
