export const GutNotFound = {
  description: 'Project or Gut dimension not found for the project',
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
        gutNotFound: {
          summary: 'Gut dimension not found',
          value: {
            statusCode: 404,
            message: 'Gut not found for project: {projectId}',
          },
        },
      },
    },
  },
};

export const GutFound = {
  description: 'Project and dimension found',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const GutUpdatedOk = {
  description: 'Project and dimension found and updated successfully',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const GutExists = {
  description: 'A Gut dimension with the passed id already exists',
  content: {
    'application/json': {
      example: {
        statusCode: 403,
        message: 'This Gut Dimension already exists: {id}',
      },
    },
  },
};
