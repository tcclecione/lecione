import { async, types } from 'utils/type-creator';

export default types(
  [
    ...async('LIST_DEPARTMENTS'),
    ...async('LIST_COLLABORATORS'),
    ...async('DETAILS_COLLABORATOR')
  ],
  'EMPLOYEES',
);
