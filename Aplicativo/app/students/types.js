import { async, types } from 'utils/type-creator';

export default types(
  [
    'SET_STUDENT_SAVE',
    ...async('LIST_STUDENTS'),
  ],
  'STUDENTS',
);
