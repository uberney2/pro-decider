import { StringValueObject } from './../../Shared/domain/value-object/StringValueObject';

export class KeyPeopleEmail extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureEmailIsValid(value);
  }

  private ensureEmailIsValid(value: string) {
    const isEmail = value
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

    if (!isEmail) {
      throw new Error(
        'The Key People Email should have the syntax of an email'
      );
    }
  }
}
