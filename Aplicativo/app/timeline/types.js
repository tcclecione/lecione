import { types, async } from 'utils/type-creator';

export default types(
  [
    ...async('GET_TIMELINE'),
  ],
  'TIMELINE',
);
