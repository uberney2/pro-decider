import { Uuid } from '../Uuid';

describe('Uuid value object', () => {
  it('should throw an error if the id value is not an uuid', () => {
    const createIdObject = () => {
      new Uuid('123456774344');
    };
    expect(createIdObject).toThrowError();
  });

  it('should create a valid id object if it is an uuid', () => {
    const id = 'b60b831a-d782-4390-a36b-519af3293579';
    const idObject = new Uuid(id);
    expect(idObject.value).toEqual(id);
  });
});
