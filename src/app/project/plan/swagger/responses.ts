export const PlanNotFound = {
  description: 'Project or Plan dimension not found for the project',
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
        planNotFound: {
          summary: 'Plan dimension not found',
          value: {
            statusCode: 404,
            message: 'Plan not found for project: {projectId}',
          },
        },
      },
    },
  },
};

export const PlanFound = {
  description: 'Project and dimension found',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabcd',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        backlogResponsible: 'backlogResponsible lorem ipsum',
        roadMap: 'roadMap lorem ipsum',
        deliverables: 'deliverables lorem ipsum',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const PlanUpdatedOk = {
  description: 'Project and dimension found and updated successfully',
  content: {
    'application/json': {
      example: {
        id: 'bbbb3e7f-da70-403d-ae4f-fb7e4a0cabcd',
        projectId: '1f8874af-f8a1-4d95-8cff-2c3e68661d34',
        backlogResponsible: 'backlogResponsible lorem ipsum',
        roadMap: 'roadMap lorem ipsum',
        deliverables: 'deliverables lorem ipsum',
        observations: 'observations lorem ipsum',
        status: 'Warning',
      },
    },
  },
};

export const PlanExists = {
  description: 'A Plan dimension with the passed id already exists',
  content: {
    'application/json': {
      example: {
        statusCode: 403,
        message: 'This Plan Dimension already exists: {id}',
      },
    },
  },
};
