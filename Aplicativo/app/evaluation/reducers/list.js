import { combineActions, handleActions } from 'redux-actions';
import types from 'evaluation/types';

const INITIAL_STATE = {
  list: [],
  isLoading: false,
  resume: {}
};

const beginLoading = combineActions(
  types.LIST_EVALUATIONS,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_EVALUATIONS_SUCCESS,
  //FAIL
  types.LIST_EVALUATIONS_FAIL,
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
  [types.LIST_EVALUATIONS_SUCCESS]: (state, { payload }) => ({
    ...state,
    list: payload.data.data.evaluations,
    resume: {
      count: payload.data.data.resume[0].rating_count || 0,
      sum: payload.data.data.resume[0].rating_sum || 0
    }
  }),
}, INITIAL_STATE);

export default reducer;
