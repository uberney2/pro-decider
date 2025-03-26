import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateQADto {
  @ApiProperty({
    description: 'The dimension id',
  })
  @IsString()
  @IsUUID()
  id: string;

  @ApiProperty({
    description: 'The quality current status',
    required: false,
  })
  @IsOptional()
  @IsString()
  currentStatus?: string;

  @ApiProperty({
    description: 'The test tools used',
    required: false,
  })
  @IsOptional()
  @IsString()
  testTools?: string;

  @ApiProperty({
    description: 'The level of automation',
    required: false,
  })
  @IsOptional()
  @IsString()
  automationLevel?: string;

  @ApiProperty({
    description: 'Whether a quality manual process is used or not',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  manualProcess?: boolean;

  @ApiProperty({
    description: 'Whether a quality automated process is used or not',
    required: false,
  })
  @IsOptional()
  @IsBoolean()
  automatedProcess?: boolean;

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
