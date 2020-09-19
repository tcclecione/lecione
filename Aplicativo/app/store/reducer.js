import { combineReducers } from 'redux';
import students from 'students/reducers';
import login from 'login/reducers';
import timeline from 'timeline/reducers';
import feedback from 'feedback/reducers';
import contact from 'contact/reducers';
import profile from 'profile/reducers';
import schools from 'schools/reducers';
import accompaniment from 'accompaniment/reducers';
import complementary from 'complementary/reducers';
import evaluation from 'evaluation/reducers';
import employees from 'employees/reducers';
import disciplines from 'disciplines/reducers';
import createAccount from 'createAccount/reducers';

export default combineReducers({
  students,
  login,
  timeline,
  feedback,
  contact,
  profile,
  schools,
  accompaniment,
  complementary,
  evaluation,
  employees,
  disciplines,
  createAccount
});
