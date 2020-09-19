import types from 'login/types';

const INITIAL_STATE = {
  name: '',
  cpf: '',
  password: '',
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  if (types.SET_VALUE === type) {
    return {
      ...state,
      [action.input]: action.value,
    };
  }

  if (types.CLEAR_FORM === type) {
    return {
      ...state,
      cpf: '',
      password: ''
    };
  }

  if (types.LOGOUT === type) {
    return {
      ...INITIAL_STATE,
    };
  }

  return state;
}

export default reducer;
