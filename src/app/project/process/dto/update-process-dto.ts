import { IntersectionType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateProcessDto } from './create-process-dto';

export class UpdateProcessDto extends PartialType(CreateProcessDto) {}

export class UpdateProcessFullDto extends IntersectionType(UpdateProcessDto) {}
