import { IntersectionType } from '@nestjs/mapped-types';
import { PartialType } from '@nestjs/swagger';
import { CreateGutDto } from './create-gut-dto';

export class UpdateGutDto extends PartialType(CreateGutDto) {}

export class UpdateGutFullDto extends IntersectionType(UpdateGutDto) {}
