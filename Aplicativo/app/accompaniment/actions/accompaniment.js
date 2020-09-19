import types from 'accompaniment/types';

export const getAccompaniments = id => ({
  type: types.LIST_ACCOMPANIMENTS,
  payload: {
    request: {
      url: `/monitorings/school?id=${id}`,
      method: 'GET',
    },
  },
});

export const getAccompanimentDetails = (
  student_id,
  monitoring_type_about_id,
  monitoring_type_id,
  monitoring_type_school_id
) => ({
  type: types.DETAILS_ACCOMPANIMENT,
  payload: {
    request: {
      url: `/monitorings/school/details`,
      method: 'GET',
      params: {
        student_id,
        monitoring_type_about_id,
        monitoring_type_id,
        monitoring_type_school_id
      }
    },
  },
});

export const getPeriodsMonitoringType = (
  id
) => ({
  type: types.PERIOD_MONITORING_TYPE,
  payload: {
    request: {
      url: `/monitorings/period/${id}`,
      method: 'GET',
    },
  },
});
