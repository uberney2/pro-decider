import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  HttpException,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import {
  AccountCreator,
  AccountFinderAll,
  AccountFinderAllByPortfolioId,
  AccountFinderByParam,
  AccountUpdater
} from '../../context/Accounts/application'

import {
  AccountKeyPeopleCreator,
  AccountKeyPeopleRemover,
  AccountKeyPeopleUpdaterImportance,
  KeyPeopleGetterByAccount
} from '../../context/accountKeyPeople/application'


import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ShowAllResponse } from './dto/show-all-accounts-response';
import {
  CreateAccountKeyPeopleDto,
  KeyPeopleExtraFields,
} from './dto/create-account-keypeople.dto';
import {
  DomainExceptions,
} from '../../context/Accounts/index';
import { DomainExceptions as AccountKeyPeopleExceptions } from '../../context/accountKeyPeople/index';
import {
  DomainExceptions as KeyPeopleDomainExceptions,
  KeyPeopleWithNotesPrimitiveType,
} from '../../context/KeyPeople';
import { UpdateAccountDto } from './dto/update-account.dto';
import {
  AccountFound,
  AccountNotFound,
  GetAllAccount,
  KeyPeopleNotFound,
  KeyPeopleWithNotesFound,
  UpdatedAccount,
} from './swagger/responses';
import { AccountMapper } from './Account.mapper';

@ApiTags('Account')
@Controller('accounts')
export class AccountController {
  constructor(
    private accountCreator: AccountCreator,
    private accountFinderAll: AccountFinderAll,
    private accountFinderAllByPortfolioId: AccountFinderAllByPortfolioId,
    private accountKeyPeopleRemover: AccountKeyPeopleRemover,
    private accountUpdater: AccountUpdater,
    private accountFinderById: AccountFinderByParam,
    private keyPeopleGetterByAccount: KeyPeopleGetterByAccount,
    private accountKeyPeopleUpdaterImportance: AccountKeyPeopleUpdaterImportance,
    private accountKeyPeopleCreator: AccountKeyPeopleCreator
  ) {}

  @Post()
  async create(@Body() createAccountDto: CreateAccountDto): Promise<void> {
    try {
      await this.accountCreator.run(createAccountDto);
    } catch (error) {
      if (error instanceof DomainExceptions.AccountAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.FORBIDDEN);
      }
      throw error;
    }
  }

  @Get()
  @ApiOkResponse(GetAllAccount)
  async findAll() {
    const response = await this.accountFinderAll.run();
    return AccountMapper.createShowAccountsResponse(response);
  }

  @Get('byPortfolio')
  @ApiOkResponse(GetAllAccount)
  async findAllByPortfolioId(@Headers('portfolioId') portfolioId?: string) {
    const response = portfolioId
      ? await this.accountFinderAllByPortfolioId.run(portfolioId)
      : await this.accountFinderAll.run();
    return AccountMapper.createShowAccountsResponse(response);
  }

  @Put(':accountId')
  @ApiOkResponse(UpdatedAccount)
  @ApiNotFoundResponse(AccountNotFound)
  async update(
    @Param('accountId') accountId: string,
    @Body() UpdateAccountDto: UpdateAccountDto
  ) {
    try {
      UpdateAccountDto.id = accountId;
      const fullAccount =
        AccountMapper.mapAccountDtoToFullAccountDto(UpdateAccountDto);
      const response = await this.accountUpdater.run(fullAccount);
      return response.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotUpdated) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }
      throw error;
    }
  }

  @Get(':param')
  @ApiOkResponse(AccountFound)
  @ApiNotFoundResponse(AccountNotFound)
  async findByParam(@Param('param') param: string) {
    try {
      const account = await this.accountFinderById.run(param);
      return account.toPrimitives();
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Post(':accountId/keypeople/:keyPeopleId')
  @ApiNotFoundResponse(KeyPeopleNotFound)
  async linkKeyPeople(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string,
    @Body() requestBody: KeyPeopleExtraFields
  ): Promise<void> {
    try {
      await this.accountKeyPeopleCreator.run({
        id: '',
        accountId: accountId,
        keyPeopleId: keyPeopleId,
        notes: requestBody.notes,
      });
    } catch (error) {
      if (
        error instanceof DomainExceptions.AccountNotFound ||
        error instanceof KeyPeopleDomainExceptions.KeyPeopleNotFound ||
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotLinked
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Delete(':accountId/keypeople/:keyPeopleId')
  @ApiNotFoundResponse(KeyPeopleNotFound)
  async unLinkKeyPeople(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string
  ): Promise<void> {
    try {
      await this.accountKeyPeopleRemover.run(accountId, keyPeopleId);
    } catch (error) {
      if (
        error instanceof DomainExceptions.AccountNotFound ||
        error instanceof KeyPeopleDomainExceptions.KeyPeopleNotFound ||
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotRemoved
      ) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }

  @Patch(':accountId/keypeople/:keyPeopleId')
  @ApiNotFoundResponse(KeyPeopleNotFound)
  async UpdateImportance(
    @Param('accountId', new ParseUUIDPipe({ version: '4' })) accountId: string,
    @Param('keyPeopleId', new ParseUUIDPipe({ version: '4' }))
    keyPeopleId: string,
    @Body() requestBody: KeyPeopleExtraFields
  ): Promise<void> {
    try {
      await this.accountKeyPeopleUpdaterImportance.run(
        accountId,
        keyPeopleId,
        requestBody.notes
      );
    } catch (error) {
      if (
        error instanceof AccountKeyPeopleExceptions.AccountKeyPeopleNotUpdated
      ) {
        throw new HttpException(
          error.message,
          HttpStatus.INTERNAL_SERVER_ERROR
        );
      }
      throw error;
    }
  }

  @Get(':id/keypeople')
  @ApiOkResponse(KeyPeopleWithNotesFound)
  @ApiNotFoundResponse(AccountNotFound)
  async getLinkedKeyPeople(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): Promise<KeyPeopleWithNotesPrimitiveType[]> {
    try {
      const keyPeople = await this.keyPeopleGetterByAccount.run(id);
      return keyPeople.map((keyPerson) => keyPerson.toPrimitives());
    } catch (error) {
      if (error instanceof DomainExceptions.AccountNotFound) {
        throw new HttpException(error.message, HttpStatus.NOT_FOUND);
      }
      throw error;
    }
  }
}
