import { OmitType } from '@nestjs/mapped-types';
import { CreateKeyPeopleDto } from './create-keypeople.dto';

export class UpdateKeyPeopleDto extends OmitType(CreateKeyPeopleDto, ['id']) {}
