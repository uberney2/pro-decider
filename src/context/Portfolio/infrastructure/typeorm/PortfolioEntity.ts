import {
  Entity,
  Column,
  PrimaryColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
@Entity('portfolio')
export class PortfolioEntity {
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
