import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
  Delete,
  Param,
  ParseUUIDPipe,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags,
} from '@nestjs/swagger';

import { KeyPeoplePresenter } from './dto/keypeople.presenter';
import {
  KeyPeopleCreator,
  KeyPeopleFinder,
  KeyPeopleRemover,
} from '../../context/KeyPeople/application';

import { CreateKeyPeopleDto } from './dto/create-keypeople.dto';
import { DomainExceptions } from '../../context/KeyPeople/index';
import {
  InvalidEmail,
  KeyPeopleCreated,
  KeyPeopleFoundAll,
  KeyPeopleNotFound,
} from './swagger/responses';

@ApiTags('KeyPeople')
@Controller('keypeople')
export class KeyPeopleController {
  constructor(
    private keyPeopleCreator: KeyPeopleCreator,
    private KeyPeopleFinder: KeyPeopleFinder,
    private KeyPeopleRemover: KeyPeopleRemover
  ) {}

  @Post()
  @ApiCreatedResponse(KeyPeopleCreated)
  @ApiBadRequestResponse(InvalidEmail)
  async create(@Body() createKeyPeopleDto: CreateKeyPeopleDto): Promise<void> {
    try {
      await this.keyPeopleCreator.run(createKeyPeopleDto);
    } catch (error) {
      if (error instanceof DomainExceptions.KeyPeopleAlreadyExists) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw error;
    }
  }

  @Get()
  @ApiCreatedResponse(KeyPeopleFoundAll)
  async findAll(): Promise<KeyPeoplePresenter[]> {
    const keyPeopleFound = await this.KeyPeopleFinder.run();
    return keyPeopleFound.map((record) => record.toPrimitives());
  }

  @Delete(':id')
  @ApiBadRequestResponse(KeyPeopleNotFound)
  async remove(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string
  ): Promise<void> {
    try {
      await this.KeyPeopleRemover.run(id);
    } catch (error) {
      if (error instanceof DomainExceptions.KeyPeopleNotFound) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

      throw error;
    }
  }
}
