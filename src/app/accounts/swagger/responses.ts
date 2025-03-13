export const GetAllAccount = {
  description: 'get all accounts',
  content: {
    'application/json': {
      example: [
        {
          id: 'a60b831a-d782-4390-a35b-519af3293582',
          name: 'Perficient',
          buOwner: {
            id: '02fb08b8-09ce-42b7-b06a-384f238bf2b5',
            name: 'BuName',
            createdAt: '2023-02-22T00:37:30.669Z',
            updatedAt: '2023-02-22T00:37:30.669Z',
          },
          portfolio: {
            id: '7a18c0af-e57e-45d7-b74c-1d5e671db52b',
            name: 'PortfolioName',
            createdAt: '2023-02-22T00:37:30.559Z',
            updatedAt: '2023-02-22T00:37:30.559Z',
          },
          status: 'active',
          keyPeople: [
            {
              id: 'b60b831a-d782-4390-a36b-519af3293589',
              name: 'name',
              role: 'director',
              email: 'admin90@perficient.com',
              note: 'note',
              createdAt: '2022-12-31T22:09:23.696Z',
              updatedAt: '2022-12-31T22:09:23.696Z',
            },
          ],
          createdAt: '2022-12-31T22:09:55.297Z',
          updatedAt: '2022-12-31T22:09:55.297Z',
        },
        {
          id: 'a60b831a-d782-4390-a35b-519af3293583',
          name: 'Perficient2',
          buOwner: 'Colombia',
          portfolio: 'portfolio',
          status: 'active',
          keyPeople: [
            {
              id: 'b60b831a-d782-4390-a36b-519af3293589',
              name: 'name',
              role: 'director',
              email: 'admin90@perficient.com',
              note: 'note2',
              createdAt: '2022-12-31T22:09:23.696Z',
              updatedAt: '2022-12-31T22:09:23.696Z',
            },
            {
              id: 'b60b831a-d782-4390-a36b-519af3293590',
              name: 'name',
              role: 'director',
              email: 'admin91@perficient.com',
              note: 'note3',
              createdAt: '2023-01-01T02:01:52.970Z',
              updatedAt: '2023-01-01T02:01:52.970Z',
            },
          ],
          createdAt: '2023-01-01T02:02:09.540Z',
          updatedAt: '2023-01-01T02:02:09.540Z',
        },
      ],
    },
  },
};

export const AccountFound = {
  description: 'get accounts by id',
  content: {
    'application/json': {
      example: {
        id: 'a60b831a-d782-4390-a35b-519af3293582',
        name: 'Perficient',
        buOwner: {
          id: '02fb08b8-09ce-42b7-b06a-384f238bf2b5',
          name: 'BuName',
          createdAt: '2023-02-22T00:37:30.669Z',
          updatedAt: '2023-02-22T00:37:30.669Z',
        },
        portfolio: {
          id: '7a18c0af-e57e-45d7-b74c-1d5e671db52b',
          name: 'PortfolioName',
          createdAt: '2023-02-22T00:37:30.559Z',
          updatedAt: '2023-02-22T00:37:30.559Z',
        },
        status: 'active',
        keyPeople: [
          {
            id: 'b60b831a-d782-4390-a36b-519af3293589',
            name: 'name',
            role: 'director',
            email: 'admin90@perficient.com',
            note: 'note',
            createdAt: '2022-12-31T22:09:23.696Z',
            updatedAt: '2022-12-31T22:09:23.696Z',
          },
        ],
        createdAt: '2022-12-31T22:09:55.297Z',
        updatedAt: '2022-12-31T22:09:55.297Z',
      },
    },
  },
};

export const UpdatedAccount = {
  description: 'Account Updated',
  content: {
    'application/json': {
      example: {
        id: 'a60b831a-d782-4390-a35b-519af3293582',
        name: 'Perficient',
        buOwner: {
          id: '02fb08b8-09ce-42b7-b06a-384f238bf2b5',
          name: 'BuName',
          createdAt: '2023-02-22T00:37:30.669Z',
          updatedAt: '2023-02-22T00:37:30.669Z',
        },
        portfolio: {
          id: '7a18c0af-e57e-45d7-b74c-1d5e671db52b',
          name: 'PortfolioName',
          createdAt: '2023-02-22T00:37:30.559Z',
          updatedAt: '2023-02-22T00:37:30.559Z',
        },
        status: 'active',
        keyPeople: [
          {
            id: 'b60b831a-d782-4390-a36b-519af3293589',
            name: 'name',
            role: 'director',
            email: 'admin90@perficient.com',
            note: 'note',
            createdAt: '2022-12-31T22:09:23.696Z',
            updatedAt: '2022-12-31T22:09:23.696Z',
          },
        ],
        createdAt: '2022-12-31T22:09:55.297Z',
        updatedAt: '2022-12-31T22:09:55.297Z',
      },
    },
  },
};

export const AccountNotFound = {
  description: 'Account not found with param: NOTHING',
  content: {
    'application/json': {
      example: {
        message: 'Account not found with param: NOTHING',
      },
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

export const KeyPeopleWithNotesFound = {
  description: 'Key People with importances (Notes) associated to a account ',
  content: {
    'application/json': {
      example: {
        id: 'b60b831a-d782-4390-a36b-519af3293589',
        name: 'Name',
        role: 'role',
        email: 'email@perficient.com',
        note: 'importance',
        createdAt: '2022-12-31T22:09:55.297Z',
        updatedAt: '2022-12-31T22:09:55.297Z',
      },
    },
  },
};
