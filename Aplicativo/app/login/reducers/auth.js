import types from 'login/types';

const INITIAL_STATE = {
  user: {},
  student: {},
  token: {},
  isLoading: false,
};

function reducer(state = INITIAL_STATE, { type, ...action }) {
  const { payload } = action;

  if (types.LOADING === type) {
    return {
      ...state,
      isLoading: payload,
    };
  }

  if (types.SET_STUDENT === type) {
    return {
      ...state,
      student: payload,
    };
  }

  if (types.SET_STUDENT_LOGIN === type) {
    return {
      ...state,
      student: payload,
    };
  }

  if (types.SET_USER === type) {
    return {
      ...state,
      user: payload,
    };
  }

  if (types.AUTH_REQUEST === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.AUTH_REQUEST_SUCCESS === type) {
    return {
      ...state,
      user: {
        token: action.payload.token,
        info: action.payload.user
      },
      isLoading: false,
    };
  }

  if ([types.AUTH_REQUEST_FAIL, types.AUTH_REQUEST_SUCCESS, types.AUTH_GET_USER_FAIL, types.AUTH_STOP_LOADING].includes(type)) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (types.AUTH_GET_USER === type) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (types.AUTH_GET_USER_SUCCESS === type) {
    return {
      ...state,
      user: action.payload.data.data,
    };
  }

  if (types.AUTH_SET_TOKEN === type) {
    return {
      ...state,
      token: action.token,
      isLoading: false,
    };
  }

  if (types.LOGOUT === type) {
    return { ...INITIAL_STATE };
  }

  return state;
}

export default reducer;
