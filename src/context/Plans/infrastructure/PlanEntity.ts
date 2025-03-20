import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ProjectEntity } from '../../Projects/infrastructure';
import { DimensionBaseEntity } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';

@Entity('plans')
export class PlanEntity extends DimensionBaseEntity {
  @Column('varchar', { length: 5000, nullable: true })
  backlogResponsible?: string;

  @Column('varchar', { length: 5000, nullable: true })
  roadMap?: string;

  @Column('varchar', { length: 5000, nullable: true })
  deliverables?: string;

  @OneToOne(() => ProjectEntity, (project) => project.plan, { eager: true })
  @JoinColumn()
  project: ProjectEntity;
}
