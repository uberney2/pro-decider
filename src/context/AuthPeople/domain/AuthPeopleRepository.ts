import { IGenericRepositoryFindByParam } from '../../Shared/domain/generic-repository/IGenericRepositoryFindByParam';
import { Portfolio } from '../../Portfolio/domain/Portfolio';
import { AuthPeopleEmail } from './AuthPeopleEmail';
import { AuthPeople } from './AuthPeople';

export interface AuthPeopleRepository extends IGenericRepositoryFindByParam<Portfolio[]> {
    findByEmail(email: AuthPeopleEmail): Promise<AuthPeople | null>
}
