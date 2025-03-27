import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from 'typeorm';
import { PortfolioEntity } from '../../../Portfolio/infrastructure/typeorm/PortfolioEntity';

@Entity('auth_people')
export class AuthPeopleEntity {
  @PrimaryColumn('varchar', { length: 36 })
  id: string;

  @Column('varchar', { length: 100 })
  authPeopleEmail: string;

  @Column('varchar', { length: 100 })
  authPeoplePassword: string;

  @ManyToMany(() => PortfolioEntity)
  @JoinTable()
  portfolio: PortfolioEntity[];
}
