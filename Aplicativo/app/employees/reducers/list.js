import { combineActions, handleActions } from 'redux-actions';
import types from 'employees/types';

const INITIAL_STATE = {
  departments: [],
  collaborators: [],
  details: {},
  isLoading: false
};

const beginLoading = combineActions(
  types.LIST_DEPARTMENTS,
  types.LIST_COLLABORATORS,
  types.DETAILS_COLLABORATOR
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_DEPARTMENTS_SUCCESS,
  types.LIST_COLLABORATORS_SUCCESS,
  types.DETAILS_COLLABORATOR_SUCCESS,
  //FAIL
  types.LIST_DEPARTMENTS_FAIL,
  types.LIST_COLLABORATORS_FAIL,
  types.DETAILS_COLLABORATOR_FAIL,
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
  [types.LIST_DEPARTMENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    departments: payload.data.data,
  }),
  [types.LIST_COLLABORATORS_SUCCESS]: (state, { payload }) => ({
    ...state,
    collaborators: payload.data.data,
  }),
  [types.DETAILS_COLLABORATOR_SUCCESS]: (state, { payload }) => ({
    ...state,
    details: payload.data.data,
  }),
}, INITIAL_STATE);

export default reducer;
