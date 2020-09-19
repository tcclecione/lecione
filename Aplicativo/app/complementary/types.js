import { async, types } from 'utils/type-creator';

export default types(
  [
    ...async('LIST_COMPLEMENTARIES'),
    ...async('DETAILS_COMPLEMENTARY'),
    ...async('PERIOD_COMPLEMENTARY_TYPE'),
  ],
  'COMPLEMENTARY',
);
