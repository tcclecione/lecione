import { async, types } from 'utils/type-creator';

export default types(
  [
    ...async('LIST_SCHOOLS'),
    ...async('PERIOD_SCHOOL'),
  ],
  'SCHOOLS',
);
