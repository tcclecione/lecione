import { handleActions, combineActions } from 'redux-actions';
import types from 'students/types';

const INITIAL_STATE = {
  student: '',
  list: [],
  isLoading: false,
  userDefault: false
};

const beginLoading = combineActions(
  types.LIST_STUDENTS,
);

const stopLoading = combineActions(
  //SUCCESS
  types.LIST_STUDENTS_SUCCESS,
  //FAIL
  types.LIST_STUDENTS_FAIL,
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
  [types.SET_STUDENT_SAVE]: (state, { student }) => ({
    ...state,
    student,
  }),
  [types.LIST_STUDENTS_SUCCESS]: (state, { payload }) => ({
    ...state,
    list: payload.data.data.info,
    userDefault: payload.data.data.user || false
  }),
}, INITIAL_STATE);

export default reducer;
