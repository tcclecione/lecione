import { combineActions, handleActions } from 'redux-actions';
import types from 'feedback/types';

const INITIAL_STATE = {
  list: [],
  isLoading: false
};

const beginLoading = combineActions(
  types.LIST_FEEDBACK,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_FEEDBACK_SUCCESS,
  //FAIL
  types.LIST_FEEDBACK_FAIL,
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
  [types.LIST_FEEDBACK_SUCCESS]: (state, { payload }) => ({
    ...state,
    list: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
