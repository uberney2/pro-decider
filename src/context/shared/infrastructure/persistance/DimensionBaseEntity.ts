import { Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

export enum Status {
  GOOD = 'Good',
  WARNING = 'Warning',
  BAD = 'Bad',
  NOT_DEFINED = 'Not Defined',
}

export abstract class DimensionBaseEntity extends BaseEntity {
  @Column('varchar', { length: 5000, nullable: true })
  observations?: string;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.NOT_DEFINED,
  })
  status?: Status;
}
