import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ProjectEntity } from '../../Projects/infrastructure';
import { DimensionBaseEntity } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';

@Entity('qa')
export class QaEntity extends DimensionBaseEntity {
  @Column('varchar', { length: 5000, nullable: true })
  currentStatus?: string;

  @Column('varchar', { length: 5000, nullable: true })
  testTools?: string;

  @Column('varchar', { length: 5000, nullable: true })
  automationLevel?: string;

  @Column('boolean', { nullable: true })
  manualProcess?: boolean;

  @Column('boolean', { nullable: true })
  automatedProcess?: boolean;

  @OneToOne(() => ProjectEntity, (project) => project.qa, { eager: true })
  @JoinColumn()
  project: ProjectEntity;
}
