import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ProjectEntity } from '../../Projects/infrastructure';
import { DimensionBaseEntity } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';
import { AccountabilityLevelEnum } from '../domain';

@Entity('process')
export class ProcessEntity extends DimensionBaseEntity {
  @Column('varchar', { length: 5000, nullable: true })
  stack?: string;

  @Column('varchar', { length: 5000, nullable: true })
  methodology?: string;

  @Column('varchar', { length: 5000, nullable: true })
  frequencyToDeploy?: string;

  @Column('varchar', { length: 5000, nullable: true })
  latamInfluence?: string;

  @Column({
    type: 'enum',
    enum: AccountabilityLevelEnum,
    nullable: true,
  })
  accountabilityLevel?: AccountabilityLevelEnum;

  @OneToOne(() => ProjectEntity, (project) => project.process, { eager: true })
  @JoinColumn()
  project: ProjectEntity;
}
