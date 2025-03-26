import { IntersectionType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateQADto } from './create-qa-dto';

export class UpdateQADto extends PartialType(CreateQADto) {}

export class UpdateQAFullDto extends IntersectionType(UpdateQADto) {}
