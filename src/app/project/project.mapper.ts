import { Account } from '../../context/Accounts';
import { CreateAccountDto } from '../accounts/dto/create-account.dto';
import {
  UpdateProjectDto,
  UpdateProjectFullDto,
} from './dto/update-project.dto';

export class ProjectMapper {
  static projectDtoToFullProjectDto(
    projectWithOutId: UpdateProjectDto
  ): UpdateProjectFullDto {
    const fullAccount: UpdateProjectFullDto = {
      id: projectWithOutId.id,
      account: projectWithOutId.account,
      name: projectWithOutId.name,
      averageBillingRate: projectWithOutId.averageBillingRate,
      fullTimeEmployees: projectWithOutId.fullTimeEmployees,
      totalHours: projectWithOutId.totalHours,
      closingProbability: projectWithOutId.closingProbability,
      latamRevenue: projectWithOutId.latamRevenue,
      latamParticipationPercentage:
        projectWithOutId.latamParticipationPercentage,
      activeEmployees: projectWithOutId.activeEmployees,
      gmPercentage: projectWithOutId.gmPercentage,
      totalSOW: projectWithOutId.totalSOW,
      contractType: projectWithOutId.contractType,
      usaPointOfContact: projectWithOutId.usaPointOfContact,
      pursuitStartDate: projectWithOutId.pursuitStartDate,
      pursuitEndDate: projectWithOutId.pursuitEndDate,
      statusChangeDate: projectWithOutId.statusChangeDate,
      responsibleFromLatam: projectWithOutId.responsibleFromLatam,
      status: projectWithOutId.status,
      additionalBackground: projectWithOutId.additionalBackground,
      onboardingProcess: projectWithOutId.onboardingProcess,
      servicesScope: projectWithOutId.servicesScope,
      levelOfAccount: projectWithOutId.levelOfAccount,
    };

    return fullAccount;
  }

  static accountObjectToCreateAccountDto(account: Account): CreateAccountDto {
    const newCreateAccountDto: CreateAccountDto = {
      id: account.id.value,
      name: account.name.value,
      buOwner: {
        id: account.buOwner.id.value,
        name: account.buOwner.name.value,
      },
      portfolio: {
        id: account.portfolio.id.value,
        name: account.portfolio.name.value,
      },
    };
    return newCreateAccountDto;
  }
}
