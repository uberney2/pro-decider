import { IntersectionType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreatePlanDto } from './create-plan-dto';

export class UpdatePlanDto extends PartialType(CreatePlanDto) {}

export class UpdatePlanFullDto extends IntersectionType(UpdatePlanDto) {}
