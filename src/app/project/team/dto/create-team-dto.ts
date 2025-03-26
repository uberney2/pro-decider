import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTeamDto {
  @ApiProperty({
    description: 'The dimension id',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The team composition',
    required: false,
  })
  @IsOptional()
  @IsString()
  composition?: string;

  @ApiProperty({
    description: 'The team configuration',
    required: false,
  })
  @IsOptional()
  @IsString()
  teamConfiguration?: string;

  @ApiProperty({
    description: 'The required english level',
    required: false,
  })
  @IsOptional()
  @IsString()
  englishLevel?: string;

  @ApiProperty({
    description: 'Any observations for this dimension',
    required: false,
  })
  @IsOptional()
  @IsString()
  observations?: string;

  @ApiProperty({
    description: 'The date to deploy the team',
    required: false,
  })
  @IsOptional()
  deployDate?: Date;

  @ApiProperty({
    description: 'The dimension status',
    default: 'Not Defined',
    enum: ['Good', 'Warning', 'Bad', 'Not Defined'],
  })
  @IsOptional()
  @IsString()
  status?: string;
}
