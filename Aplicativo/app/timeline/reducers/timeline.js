import { combineActions, handleActions } from 'redux-actions';
import types from 'timeline/types';

const INITIAL_STATE = {
  list: [],
  isLoading: false
};

const beginLoading = combineActions(
  types.GET_TIMELINE,
);

const stopLoading = combineActions(
  //SUCCESS
  types.GET_TIMELINE_SUCCESS,
  //FAIL
  types.GET_TIMELINE_FAIL,
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
  [types.GET_TIMELINE_SUCCESS]: (state, { payload }) => ({
    ...state,
    list: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
