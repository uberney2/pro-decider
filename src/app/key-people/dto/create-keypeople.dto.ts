import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsUUID, IsEmail } from 'class-validator';

export class CreateKeyPeopleDto {
  @ApiProperty({
    description: 'Id of the new Key Person',
    default: 'b60b831a-d782-4390-a36b-519af3293510',
  })
  @IsString()
  @IsUUID()
  readonly id: string;

  @ApiProperty({
    description: 'Name of the new Key Person',
    default: 'Nicolas Felipe Jején Martínez',
  })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({
    description: 'Role of the new Key Person',
    default: 'Project owner',
  })
  @IsString()
  @IsNotEmpty()
  readonly role: string;

  @ApiProperty({
    description: 'Email of the new Key Person',
    default: 'Project ownernicolas.jema@perficient.com',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
}
