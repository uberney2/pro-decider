import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Portfolio } from '../../context/Portfolio/index';
import { ShowAllPortfolio } from './dto/show-all-portfolio';
import { GetAllPortfolio } from './swagger/response';
import {  PortfolioFinderAll } from '../../context/Portfolio/application/PortfolioFinderAll';

@ApiTags('Portfolio')
@Controller('portfolio')
export class PortfolioController {
  constructor(private portfolioFinderAll: PortfolioFinderAll) {}

  @Get()
  @ApiOkResponse(GetAllPortfolio)
  async findAll(): Promise<ShowAllPortfolio[]> {
    const response = await this.portfolioFinderAll.run();
    return this.createShowPortfoliosResponse(response);
  }

  private createShowPortfoliosResponse(
    response: Array<Portfolio>
  ): ShowAllPortfolio[] {
    const newResponse = response.map(this.convertBuPrimitivesToShowAllBuOwner);
    return newResponse;
  }

  private convertBuPrimitivesToShowAllBuOwner(portfolio: Portfolio) {
    return new ShowAllPortfolio(
      portfolio.id.value,
      portfolio.name.value,
    );
  }
}
