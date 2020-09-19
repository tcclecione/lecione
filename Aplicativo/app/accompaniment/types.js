import { async, types } from 'utils/type-creator';

export default types(
  [
    ...async('LIST_ACCOMPANIMENTS'),
    ...async('DETAILS_ACCOMPANIMENT'),
    ...async('PERIOD_MONITORING_TYPE'),
  ],
  'ACCOMPANIMENT',
);
