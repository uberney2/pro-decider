import { PartialType } from '@nestjs/mapped-types';
import { CreateKeyPeopleDto } from '../../key-people/dto/create-keypeople.dto';
import { ApiProperty, IntersectionType } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class KeyPeopleExtraFields {
  @ApiProperty({
    description: 'importance of key people for the account',
  })
  @IsString()
  @IsNotEmpty()
  notes: string;
}

class KeyPeopleExtraFieldsOptional extends PartialType(KeyPeopleExtraFields) {}
export class CreateAccountKeyPeopleDto extends IntersectionType(
  CreateKeyPeopleDto,
  KeyPeopleExtraFieldsOptional
) {}
