import { combineActions, handleActions } from 'redux-actions';
import types from 'createAccount/types';

const INITIAL_STATE = {
  info: null,
  isLoading: false,
  responsible: {},
  isResponsible: null,
};

const beginLoading = combineActions(
  types.DETAILS_PROFILE,
  types.CREATE_ACCOUNT
);

const stopLoading = combineActions(
  //SUCCESS
  types.DETAILS_PROFILE_SUCCESS,
  types.CREATE_ACCOUNT_SUCCESS,
  //FAIL
  types.DETAILS_PROFILE_FAIL,
  types.CREATE_ACCOUNT_FAIL
);

const reducer = handleActions({
  [beginLoading]: state => ({
    ...state,
    isLoading: true,
  }),
  [stopLoading]: state => ({
    ...state,
    isLoading: false,
  }),
  [types.DETAILS_PROFILE_SUCCESS]: (state, { payload }) => ({
    ...state,
    info: payload.data.data,
  }),
  [types.DETAILS_RESPONSIBLE_SUCCESS]: (state, { payload }) => ({
    ...state,
    responsible: payload.data.data,
    isResponsible: true,
  }),
  [types.DETAILS_RESPONSIBLE_FAIL]: (state) => ({
    ...state,
    responsible: {},
    isResponsible: false,
  }),
  [types.CLEAR_FIELDS_VALUES]: (state) => ({
    ...state,
    responsible: {},
  })
}, INITIAL_STATE);

export default reducer;
