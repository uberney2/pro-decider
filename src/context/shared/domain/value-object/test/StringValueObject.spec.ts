import { StringValueObject } from '../StringValueObject';

describe('string value object', () => {
  it('should throw an error if the value has less than 1 character', () => {
    const createNameObject = () => {
      new StringValueObject('');
    };
    expect(createNameObject).toThrowError();
  });

  it('should create a name object if the value has 1 or more characters', () => {
    const value = 'string';
    const nameObject = new StringValueObject(value);
    expect(nameObject.value).toEqual(value);
  });
});
