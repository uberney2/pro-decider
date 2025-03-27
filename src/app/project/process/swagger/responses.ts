export const ProcessNotFound = {
  description: 'Project or Process dimension not found for the project',
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
        processNotFound: {
          summary: 'Process dimension not found',
          value: {
            statusCode: 404,
            message: 'Process not found for project: {projectId}',
          },
        },
      },
    },
  },
};

export const ProcessFound = {
  description: 'Project and dimension found',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabc9',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        stack: 'stack lorem ipsum',
        methodology: 'methodology lorem ipsum',
        frequencyToDeploy: 'frequencyToDeploy lorem ipsum',
        latamInfluence: 'latamInfluence lorem ipsum',
        accountabilityLevel: 'Based on Client',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const ProcessUpdatedOk = {
  description: 'Project and dimension found and updated successfully',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabc9',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        stack: 'stack lorem ipsum',
        methodology: 'methodology lorem ipsum',
        frequencyToDeploy: 'frequencyToDeploy lorem ipsum',
        latamInfluence: 'latamInfluence lorem ipsum',
        accountabilityLevel: 'Based on Client',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const ProcessExists = {
  description: 'A Process dimension with the passed id already exists',
  content: {
    'application/json': {
      example: {
        statusCode: 403,
        message: 'This Process Dimension already exists: {id}',
      },
    },
  },
};
