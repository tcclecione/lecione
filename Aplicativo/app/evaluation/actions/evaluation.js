import types from 'evaluation/types';

export const getEvaluations = (type_school_id, type_id, screen) => ({
  type: types.LIST_EVALUATIONS,
  payload: {
    request: {
      url: `/${screen ? 'courses' : 'monitorings'}/evaluation/list`,
      method: 'GET',
      params: {
        type_school_id: type_school_id,
        type_id: type_id
      }
    },
  },
});
