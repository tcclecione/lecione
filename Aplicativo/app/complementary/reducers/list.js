import { combineActions, handleActions } from 'redux-actions';
import types from 'complementary/types';

const INITIAL_STATE = {
  isLoading: false,
  info: [],
  detail_complementaries: [],
  detail_about: {},
  period: [],
  evaluation: {}
};

const beginLoading = combineActions(
  types.LIST_COMPLEMENTARIES,
  types.DETAILS_COMPLEMENTARY,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_COMPLEMENTARIES_SUCCESS,
  types.DETAILS_COMPLEMENTARY_SUCCESS,

  //FAIL
  types.LIST_COMPLEMENTARIES_FAIL,
  types.DETAILS_COMPLEMENTARY_FAIL,
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
  [types.LIST_COMPLEMENTARIES_SUCCESS]: (state, { payload }) => ({
    ...state,
    info: payload.data.data,
  }),
  [types.DETAILS_COMPLEMENTARY_SUCCESS]: (state, { payload }) => ({
    ...state,
    detail_complementaries: payload.data.data.courses,
    detail_about: payload.data.data.course_about,
    evaluation: {
      count: payload.data.data.evaluation[0].rating_count || 0,
      sum: payload.data.data.evaluation[0].rating_sum || 0
    }
  }),
  [types.PERIOD_COMPLEMENTARY_TYPE_SUCCESS]: (state, { payload }) => ({
    ...state,
    period: payload.data.data,
  })
}, INITIAL_STATE);

export default reducer;
