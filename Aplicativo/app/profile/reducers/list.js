import { combineActions, handleActions } from 'redux-actions';
import types from 'profile/types';

const INITIAL_STATE = {
  info: null,
  isLoading: false
};

const beginLoading = combineActions(
  types.DETAILS_PROFILE,
);

const stopLoading = combineActions(
  //SUCCESS
  types.DETAILS_PROFILE_SUCCESS,
  //FAIL
  types.DETAILS_PROFILE_FAIL,
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
}, INITIAL_STATE);

export default reducer;
