import types from 'employees/types';

export const getDepartments = () => ({
  type: types.LIST_DEPARTMENTS,
  payload: {
    request: {
      url: `/collaborators`,
      method: 'GET',
    },
  },
});

export const getCollaborators = (office_id, school_id) => ({
  type: types.LIST_COLLABORATORS,
  payload: {
    request: {
      url: `/collaborators/office`,
      method: 'GET',
      params: {
        office_id,
        school_id
      }
    },
  },
});

export const getDetails = id => ({
  type: types.DETAILS_COLLABORATOR,
  payload: {
    request: {
      url: `/collaborators/${id}`,
      method: 'GET',
    },
  },
});
