import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
import { AccountKeyPeople } from '../../../accountKeyPeople/domain/AccountKeyPeople';
import { AccountKeyPeopleEntity } from '../../../accountKeyPeople/infrastructure/typeorm/AccountKeyPeopleEntity';

@Entity('key_people')
export class KeyPeopleEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('varchar', { length: 100 })
  name: string;

  @Column('varchar', { length: 100 })
  role: string;

  @Column('varchar', { length: 100, unique: true })
  email: string;

  @CreateDateColumn({
    readonly: true,
  })
  createdAt?: Date;

  @UpdateDateColumn({})
  updatedAt?: Date;

  @OneToMany(
    () => AccountKeyPeopleEntity,
    (accountKeyPeople) => accountKeyPeople.keyPeople,
    { cascade: true, onDelete: 'CASCADE' }
  )
  public accountKeyPeople?: AccountKeyPeople[];
}
