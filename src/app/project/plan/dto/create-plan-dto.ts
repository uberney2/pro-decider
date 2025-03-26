import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreatePlanDto {
  @ApiProperty({
    description: 'The dimension id',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The backlog responsible',
    required: false,
  })
  @IsOptional()
  @IsString()
  backlogResponsible?: string;

  @ApiProperty({
    description: 'The road map',
    required: false,
  })
  @IsOptional()
  @IsString()
  roadMap?: string;

  @ApiProperty({
    description: 'The expected deliverables',
    required: false,
  })
  @IsOptional()
  @IsString()
  deliverables?: string;

  @ApiProperty({
    description: 'The dimension status',
    default: 'Not Defined',
    enum: ['Good', 'Warning', 'Bad', 'Not Defined'],
  })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiProperty({
    description: 'Any observations for this dimension',
    required: false,
  })
  @IsOptional()
  @IsString()
  observations?: string;
}
