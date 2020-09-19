import { combineActions, handleActions } from 'redux-actions';
import types from 'disciplines/types';

const INITIAL_STATE = {
  list: [],
  isLoading: false
};

const beginLoading = combineActions(
  types.LIST_DISCIPLINES,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_DISCIPLINES_SUCCESS,
  //FAIL
  types.LIST_DISCIPLINES_FAIL,
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
  [types.LIST_DISCIPLINES_SUCCESS]: (state, { payload }) => ({
    ...state,
    list: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
