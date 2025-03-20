import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ProjectEntity } from '../../../Projects/infrastructure';
import { DimensionBaseEntity } from '../../../Shared/infrastructure/persistance/DimensionBaseEntity';

@Entity('teams')
export class TeamEntity extends DimensionBaseEntity {
  @Column('varchar', { length: 5000, nullable: true })
  composition?: string;

  @Column('varchar', { length: 5000, nullable: true })
  teamConfiguration?: string;

  @Column('varchar', { length: 5000, nullable: true })
  englishLevel?: string;

  @Column('date', { nullable: true })
  deployDate?: Date;

  @OneToOne(() => ProjectEntity, (project) => project.team, { eager: true })
  @JoinColumn()
  project: ProjectEntity;
}
