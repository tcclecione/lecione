import { combineActions, handleActions } from 'redux-actions';
import types from 'accompaniment/types';

const INITIAL_STATE = {
  isLoading: false,
  info: [],
  detail_monitorings: [],
  detail_about: {},
  period: [],
  evaluation: {}
};

const beginLoading = combineActions(
  types.LIST_ACCOMPANIMENTS,
  types.DETAILS_ACCOMPANIMENT,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_ACCOMPANIMENTS_SUCCESS,
  types.DETAILS_ACCOMPANIMENT_SUCCESS,

  //FAIL
  types.LIST_ACCOMPANIMENTS_FAIL,
  types.DETAILS_ACCOMPANIMENT_FAIL,
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
  [types.LIST_ACCOMPANIMENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    info: payload.data.data,
  }),
  [types.DETAILS_ACCOMPANIMENT_SUCCESS]: (state, { payload }) => ({
    ...state,
    detail_monitorings: payload.data.data.monitorings,
    detail_about: payload.data.data.monitoring_about,
    evaluation: {
      count: payload.data.data.evaluation[0].rating_count || 0,
      sum: payload.data.data.evaluation[0].rating_sum || 0
    }
  }),
  [types.PERIOD_MONITORING_TYPE_SUCCESS]: (state, { payload }) => ({
    ...state,
    period: payload.data.data,
  })
}, INITIAL_STATE);

export default reducer;
