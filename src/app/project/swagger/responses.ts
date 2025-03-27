export const ProjectNotFound = {
  description: 'Project not found with param: NOTHING',
  content: {
    'application/json': {
      example: {
        statusCode: 404,
        message: 'Project not found with param: NOTHING',
      },
    },
  },
};

export const ProjectFound = {
  description: 'Project found',
  content: {
    'application/json': {
      example: {
        id: '17cce6e5-80e5-4e4c-86e5-d7579993c7cc',
        account: {
          id: '25ac3601-2b7b-4e35-a97b-af6021b4888a',
          name: 'Account 1',
          salesforceLink: 'https://cians.com',
          pcsLink: null,
          strategy: null,
          status: 'active',
        },
        name: 'NOTHING',
        gmPercentage: '23',
        totalSOW: '23',
        contractType: 'Fixed Fee',
        usaPointOfContact: 'H',
        pursuitStartDate: '2023-02-15',
        pursuitEndDate: '2023-02-13',
        statusChangeDate: null,
        createdAt: '2023-02-15T00:00:28.661Z',
        updatedAt: '2023-02-15T00:00:28.661Z',
        responsibleFromLatam: ['NO ONE'],
        status: 'Execution',
        additionalBackground: null,
        onboardingProcess: null,
        servicesScope: null,
        levelOfAccount: null,
      },
    },
  },
};

export const ProjectsFound = {
  description: 'Projects found',
  content: {
    'application/json': {
      example: [
        {
          id: '17cce6e5-80e5-4e4c-86e5-d7579993c7cc',
          account: {
            id: '25ac3601-2b7b-4e35-a97b-af6021b4888a',
            name: 'Account 1',
            buOwner: {
              id: '25ac3601-2b7b-4e35-a97b-af6021b4999b',
              name: 'buOwner1',
            },
            portfolio: {
              id: '7a18c0af-e57e-45d7-b74c-1d5e671db52b',
              name: 'portfolio1',
            },
            salesforceLink: 'https://cians.com',
            pcsLink: null,
            strategy: null,
            status: 'active',
          },
          name: 'NOTHING',
          gmPercentage: '23',
          totalSOW: '23',
          contractType: 'Fixed Fee',
          usaPointOfContact: 'H',
          pursuitStartDate: '2023-02-15',
          pursuitEndDate: '2023-02-13',
          statusChangeDate: null,
          createdAt: '2023-02-15T00:00:28.661Z',
          updatedAt: '2023-02-15T00:00:28.661Z',
          responsibleFromLatam: ['NO ONE'],
          status: 'Execution',
          additionalBackground: null,
          onboardingProcess: null,
          servicesScope: null,
          levelOfAccount: null,
        },
      ],
    },
  },
};
