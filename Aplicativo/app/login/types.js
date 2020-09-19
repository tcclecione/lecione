import { types, async } from 'utils/type-creator';

export default types(
  [
    ...async('AUTH_REQUEST'),
    ...async('AUTH_GET_USER'),
    'SET_STUDENT',
    'SET_VALUE',
    'LOGOUT',
    'AUTH_SET_TOKEN',
    'AUTH_GET_USER_SUCCESS',
    'AUTH_STOP_LOADING',
    'AUTH_GET_USER_FAIL',
    'AUTH_REQUEST_FAIL',
    'AUTH_REQUEST_SUCCESS',
    'SET_USER',
    'LOADING',
    'SET_STUDENT_LOGIN',
    'CLEAR_FORM'
  ],
  'LOGIN',
);
