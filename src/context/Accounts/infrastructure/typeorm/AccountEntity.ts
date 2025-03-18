import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { AccountKeyPeopleEntity } from '../../../accountKeyPeople/infrastructure/typeorm/AccountKeyPeopleEntity';
import { BuOwnerEntity } from '../../../BuOwner/infrastructure/typeorm/BuOwnerEntity';
import { PortfolioEntity } from '../../../Portfolio/infrastructure/typeorm/PortfolioEntity';

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity('accounts')
export class AccountEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('varchar', { length: 100, unique: true })
  name: string;

  @Column({
    type: 'enum',
    enum: AccountStatus,
    default: AccountStatus.ACTIVE,
  })
  status?: AccountStatus;

  @Column('varchar', { length: 300, nullable: true })
  salesforceLink?: string;

  @Column('varchar', { length: 300, nullable: true })
  pcsLink?: string;

  @Column('varchar', { length: 5000, nullable: true })
  strategy?: string;

  @CreateDateColumn({
    readonly: true,
  })
  createdAt?: Date;

  @UpdateDateColumn({})
  updatedAt?: Date;

  @ManyToOne(() => BuOwnerEntity, { eager: true })
  buOwner?: BuOwnerEntity;

  @ManyToOne(() => PortfolioEntity, { eager: true })
  portfolio?: PortfolioEntity;

  @OneToMany(
    () => AccountKeyPeopleEntity,
    (accountKeyPeople) => accountKeyPeople.account,
    { cascade: true }
  )
  accountKeyPeople?: AccountKeyPeopleEntity[];
}
