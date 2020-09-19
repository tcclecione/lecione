import { combineActions, handleActions } from 'redux-actions';
import types from 'contact/types';

const INITIAL_STATE = {
  info: null,
  isLoading: false
};

const beginLoading = combineActions(
  types.LIST_CONTACT,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_CONTACT_SUCCESS,
  //FAIL
  types.LIST_CONTACT_FAIL,
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
  [types.LIST_CONTACT_SUCCESS]: (state, { payload }) => ({
    ...state,
    info: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
