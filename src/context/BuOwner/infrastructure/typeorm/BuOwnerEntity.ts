import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('bu_owner')
export class BuOwnerEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('varchar', { length: 100, nullable: false })
  name: string;

  @CreateDateColumn({
    readonly: true,
  })
  createdAt?: Date;

  @UpdateDateColumn({})
  updatedAt?: Date;
}
