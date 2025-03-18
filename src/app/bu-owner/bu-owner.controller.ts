import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { BuOwnerFinderAll } from '../../context/BuOwner/index';
import { BuOwner } from '../../context/BuOwner/index';
import { ShowAllBuOwner } from './dto/show-all-bu-owner';
import { GetAllBuOwner } from './swagger/response';

@ApiTags('BuOwner')
@Controller('buOwner')
export class BuOwnerController {
  constructor(private buOwnerFinderAll: BuOwnerFinderAll) {}

  @Get()
  @ApiOkResponse(GetAllBuOwner)
  async findAll() {
    const response = await this.buOwnerFinderAll.run();
    return this.createShowBuOwnerResponse(response);
  }

  private createShowBuOwnerResponse(
    response: Array<BuOwner>
  ): ShowAllBuOwner[] {
    const newResponse = response.map(this.convertBuPrimitivesToShowAllBuOwner);
    return newResponse;
  }

  private convertBuPrimitivesToShowAllBuOwner(buOwner: BuOwner) {
    return new ShowAllBuOwner(
      buOwner.id.value,
      buOwner.name.value,
      buOwner.createdAt.value,
      buOwner.updatedAt.value
    );
  }
}
