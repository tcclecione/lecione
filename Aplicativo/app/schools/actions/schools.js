import types from 'schools/types';

export const getSchools = () => ({
  type: types.LIST_SCHOOLS,
  payload: {
    request: {
      url: `/schools`,
      method: 'GET',
    },
  },
});

export const getPeriodSchool = id => ({
  type: types.PERIOD_SCHOOL,
  payload: {
    request: {
      url: `/schools/period/${id}`,
      method: 'GET',
    },
  },
});
