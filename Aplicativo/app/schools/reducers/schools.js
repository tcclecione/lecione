import { combineActions, handleActions } from 'redux-actions';
import types from 'schools/types';

const INITIAL_STATE = {
  schools: [],
  period: [],
  isLoading: false
};

const beginLoading = combineActions(
  types.LIST_SCHOOLS,
  types.PERIOD_SCHOOL,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_SCHOOLS_SUCCESS,
  types.PERIOD_SCHOOL_SUCCESS,
  //FAIL
  types.LIST_SCHOOLS_FAIL,
  types.PERIOD_SCHOOL_FAIL,
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
  [types.LIST_SCHOOLS_SUCCESS]: (state, { payload }) => ({
    ...state,
    schools: payload.data.data,
  }),
  [types.PERIOD_SCHOOL_SUCCESS]: (state, { payload }) => ({
    ...state,
    period: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
