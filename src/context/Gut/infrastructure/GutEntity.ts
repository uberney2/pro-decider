import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { ProjectEntity } from '../../Projects/infrastructure';
import { DimensionBaseEntity } from '../../Shared/infrastructure/persistance/DimensionBaseEntity';

@Entity('gut')
export class GutEntity extends DimensionBaseEntity {
  @OneToOne(() => ProjectEntity, (project) => project.gut, { eager: true })
  @JoinColumn()
  project: ProjectEntity;
}
