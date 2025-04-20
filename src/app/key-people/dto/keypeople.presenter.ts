import { ApiProperty } from '@nestjs/swagger';
import { KeyPeople } from '../../../context/KeyPeople';

export class KeyPeoplePresenter {
  @ApiProperty({
    example: 'b60b831a-d782-4390-a36b-519af3293579',
    description: 'Key Person Id',
    uniqueItems: true,
  })
  id: string;

  @ApiProperty({
    example: 'Nicolas Felipe Jején Martínez',
    description: 'Key Person name',
  })
  name?: string;

  @ApiProperty({
    example: 'jema@correo.com',
    description: 'Key Person email',
    uniqueItems: true,
  })
  email: string;

  @ApiProperty({
    example: 'Project owner',
    description: 'Key Person role',
  })
  role?: string;

  constructor(keyPeopleInstance: KeyPeople) {
    this.id = keyPeopleInstance.id.value;
    this.name = keyPeopleInstance.name.value;
    this.email = keyPeopleInstance.email.value;
    this.role = keyPeopleInstance.role.value;
  }
}
