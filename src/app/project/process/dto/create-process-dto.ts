import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateProcessDto {
  @ApiProperty({
    description: 'The dimension id',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The technology stack',
    required: false,
  })
  @IsOptional()
  @IsString()
  stack?: string;

  @ApiProperty({
    description: 'The development methodology',
    required: false,
  })
  @IsOptional()
  @IsString()
  methodology?: string;

  @ApiProperty({
    description: 'The frequency to deploy',
    required: false,
  })
  @IsOptional()
  @IsString()
  frequencyToDeploy?: string;

  @ApiProperty({
    description: 'The latam influence',
    required: false,
  })
  @IsOptional()
  @IsString()
  latamInfluence?: string;

  @ApiProperty({
    description: 'The accountability level',
    required: false,
  })
  @IsOptional()
  @IsString()
  accountabilityLevel?: string;

  @ApiProperty({
    description: 'Any observations for this dimension',
    required: false,
  })
  @IsOptional()
  @IsString()
  observations?: string;

  @ApiProperty({
    description: 'The dimension status',
    default: 'Not Defined',
    enum: ['Good', 'Warning', 'Bad', 'Not Defined'],
  })
  @IsOptional()
  @IsString()
  status?: string;
}
