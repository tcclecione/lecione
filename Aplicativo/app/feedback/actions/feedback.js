import types from 'feedback/types';

export const getFeedbacks = id => ({
  type: types.LIST_FEEDBACK,
  payload: {
    request: {
      url: `/feedbacks/student?id=${id}`,
      method: 'GET',
    },
  },
});
