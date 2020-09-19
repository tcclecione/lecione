import types from 'contact/types';

export const getContact = id => ({
  type: types.LIST_CONTACT,
  payload: {
    request: {
      url: `/schools/contact/${id}`,
      method: 'GET',
    },
  },
});
