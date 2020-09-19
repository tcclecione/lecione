import types from 'timeline/types';

export const getTimeLine = school_id => ({
  type: types.GET_TIMELINE,
  payload: {
    request: {
      url: `timeline/${school_id}`,
      method: 'GET',
    },
  },
});