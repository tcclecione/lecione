import types from 'disciplines/types';

export const getDisciplines = id => ({
  type: types.LIST_DISCIPLINES,
  payload: {
    request: {
      url: `disciplines/classroom/${id}`,
      method: 'GET',
    },
  },
});
