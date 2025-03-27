export const QANotFound = {
  description: 'Project or QA dimension not found for the project',
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
        qaNotFound: {
          summary: 'QA dimension not found',
          value: {
            statusCode: 404,
            message: 'QA not found for project: {projectId}',
          },
        },
      },
    },
  },
};

export const QAFound = {
  description: 'Project and dimension found',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        currentStatus: 'currentStatus lorem ipsum',
        testTools: 'testTools lorem ipsum',
        automationLevel: 'automationLevel lorem ipsum',
        manualProcess: false,
        automatedProcess: true,
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const QAUpdatedOk = {
  description: 'Project and dimension found and updated successfully',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabce',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        currentStatus: 'currentStatus lorem ipsum',
        testTools: 'testTools lorem ipsum',
        automationLevel: 'automationLevel lorem ipsum',
        manualProcess: false,
        automatedProcess: true,
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const QAExists = {
  description: 'A QA dimension with the passed id already exists',
  content: {
    'application/json': {
      example: {
        statusCode: 403,
        message: 'This QA Dimension already exists: {id}',
      },
    },
  },
};
