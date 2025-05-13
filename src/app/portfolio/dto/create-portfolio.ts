import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class CreatePortfolio{
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