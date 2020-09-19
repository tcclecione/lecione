import { async, types } from 'utils/type-creator';

export default types(
  [
    ...async('DETAILS_PROFILE'),
    ...async('CREATE_ACCOUNT'),
    ...async('DETAILS_RESPONSIBLE'),
    'CLEAR_FIELDS_VALUES'
  ],
  'CREATE_ACCOUNT',
);
