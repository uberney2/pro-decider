import { Type } from 'class-transformer';
import {
  IsDefined,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsOptional,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { CreateAccountDto } from '../../accounts/dto/create-account.dto';

export class CreateProjectDto {
  @IsString()
  @IsUUID()
  id: string;

  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateAccountDto)
  account: CreateAccountDto;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  fullTimeEmployees: string;

  @IsString()
  @IsNotEmpty()
  averageBillingRate: string;

  @IsString()
  @IsNotEmpty()
  totalHours: string;

  @IsString()
  @IsNotEmpty()
  closingProbability: string;

  @IsString()
  @IsNotEmpty()
  latamRevenue: string;

  @IsString()
  @IsNotEmpty()
  latamParticipationPercentage: string;

  @IsString()
  @IsNotEmpty()
  activeEmployees: string;

  @IsOptional()
  @IsString()
  gmPercentage?: string;

  @IsOptional()
  @IsString()
  totalSOW?: string;

  @IsOptional()
  @IsString()
  contractType?: string;

  @IsString()
  @IsNotEmpty()
  usaPointOfContact: string;

  @IsOptional()
  @IsString()
  pursuitStartDate?: Date;

  @IsOptional()
  pursuitEndDate?: Date;

  @IsNotEmpty()
  statusChangeDate: Date;

  @IsNotEmpty()
  responsibleFromLatam: string[];

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  additionalBackground?: string;

  @IsOptional()
  @IsString()
  onboardingProcess?: string;

  @IsOptional()
  @IsString()
  servicesScope?: string;

  @IsOptional()
  @IsString()
  levelOfAccount?: string;
}
