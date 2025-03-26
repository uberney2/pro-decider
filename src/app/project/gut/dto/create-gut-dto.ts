import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateGutDto {
  @ApiProperty({
    description: 'The dimension id',
  })
  @IsString()
  @IsUUID()
  id: string;

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
