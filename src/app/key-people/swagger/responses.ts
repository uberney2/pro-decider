export const KeyPeopleCreated = {
  description: 'Key Person was created',
  content: {
    'application/json': {
      example: {
        id: 'b60b831a-d782-4390-a36b-519af3293579',
        name: 'name',
        email: 'correo@correo.com',
        role: 'Project owner',
      },
    },
  },
};

export const InvalidEmail = {
  description: 'Invalid property or duplicated entry',
  content: {
    'application/json': {
      example: {
        statusCode: 400,
        message: 'email must be an email',
      },
    },
  },
};

export const KeyPeopleFoundAll = {
  description: 'Key People found',
  content: {
    'application/json': {
      example: [
        {
          id: 'b60b831a-d782-4390-a36b-519af3293510',
          name: 'Nicolas Felipe Jején Martínez',
          role: 'Project owner',
          email: 'Project ownernicolas.jema@correo.com',
        },
        {
          id: 'b60b831a-d782-4390-a36b-519af3293580',
          name: 'Juan Poveda',
          role: 'director',
          email: 'admin0@correo.com',
          createdAt: '2022-12-20T23:31:47.709Z',
          updatedAt: '2022-12-20T23:31:47.709Z',
        },
      ],
    },
  },
};

export const KeyPeopleNotFound = {
  description: 'Key people or Account not found with param: NOTHING',
  content: {
    'application/json': {
      example: {
        message: 'Key people or Account not found with param: NOTHING',
      },
    },
  },
};
