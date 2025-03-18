import {
  Entity,
  Column,
  ManyToOne,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AccountEntity } from '../../../Accounts/infrastructure/typeorm/AccountEntity';

import { KeyPeopleEntity } from '../../../KeyPeople/infrastructure';

@Entity('account_key_people')
export class AccountKeyPeopleEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('varchar', { length: 36 })
  public accountId!: string;

  @Column('varchar', { length: 36 })
  public keyPeopleId!: string;

  @Column('varchar', { length: 5000 })
  public notes!: string;

  @CreateDateColumn({
    readonly: true,
  })
  createdAt?: Date;

  @UpdateDateColumn({})
  updatedAt?: Date;

  @ManyToOne(() => AccountEntity, (account) => account.accountKeyPeople, {
    onDelete: 'CASCADE',
  })
  public account?: AccountEntity;

  @ManyToOne(() => KeyPeopleEntity, (keyPeople) => keyPeople.accountKeyPeople, {
    onDelete: 'CASCADE',
  })
  public keyPeople?: KeyPeopleEntity;
}
