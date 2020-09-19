import types from 'profile/types';

export const getProfile = (cpf, id) => ({
  type: types.DETAILS_PROFILE,
  payload: {
    request: {
      url: `/profile/details`,
      method: 'GET',
      params: {
        responsible_cpf: cpf,
        student_id: id
      }
    },
  },
});
