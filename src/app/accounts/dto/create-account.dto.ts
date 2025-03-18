import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsUUID,
  ValidateNested,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  IsObject,
  IsNotEmptyObject,
  IsDefined,
} from 'class-validator';

class CreateBuOwnerDto {
  @ApiProperty({
    description: 'id business unit',
    required: true,
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'name business unit',
    required: false,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}

class CreatePortfolioDto {
  @ApiProperty({
    description: 'id portfolio',
    required: true,
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'name portfolio',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class CreateAccountDto {
  @ApiProperty({
    description: 'Account id',
    required: true,
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'Account name',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    description: 'business unit',
    required: true,
  })
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreateBuOwnerDto)
  buOwner: CreateBuOwnerDto;

  @ApiProperty({
    description: 'portfolio',
    required: true,
  })
  @IsDefined()
  @IsObject()
  @IsNotEmptyObject()
  @ValidateNested()
  @Type(() => CreatePortfolioDto)
  portfolio: CreatePortfolioDto;

  @ApiProperty({
    description: 'Account status',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  status?: string;

  @ApiProperty({
    description: 'salesforce Link',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  salesforceLink?: string;

  @ApiProperty({
    description: 'pcs Link',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsUrl()
  pcsLink?: string;

  @ApiProperty({
    description: 'strategy account',
    required: false,
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  strategy?: string;
}
