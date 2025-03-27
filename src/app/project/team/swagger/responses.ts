export const TeamNotFound = {
  description: 'Project or Team dimension not found for the project',
  content: {
    'application/json': {
      examples: {
        projectNotFound: {
          summary: 'Project not found',
          value: {
            statusCode: 404,
            message: 'Project not found with param: {projectId}',
          },
        },
        teamNotFound: {
          summary: 'Team dimension not found',
          value: {
            statusCode: 404,
            message: 'Team not found for project: {projectId}',
          },
        },
      },
    },
  },
};

export const TeamFound = {
  description: 'Project and dimension found',
  content: {
    'application/json': {
      example: {
        id: 'b60b831a-d782-4390-a36b-519af3293590',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        composition: 'Lorem ipsum',
        teamConfiguration: 'Lorem ipsum',
        englishLevel: 'Lorem ipsum',
        deployDate: '06-12-2022',
      },
    },
  },
};

export const TeamUpdatedOk = {
  description: 'Project and dimension found and updated successfully',
  content: {
    'application/json': {
      example: {
        id: 'b60b831a-d782-4390-a36b-519af3293590',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        composition: 'Lorem ipsum',
        teamConfiguration: 'Lorem ipsum',
        englishLevel: 'Lorem ipsum',
        deployDate: '06-12-2022',
      },
    },
  },
};

export const TeamExists = {
  description: 'A Team dimension with the passed id already exists',
  content: {
    'application/json': {
      example: {
        statusCode: 403,
        message: 'This Team Dimension already exists: {id}',
      },
    },
  },
};
