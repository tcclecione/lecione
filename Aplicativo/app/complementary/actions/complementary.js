import types from 'complementary/types';

export const getComplementaries = id => ({
  type: types.LIST_COMPLEMENTARIES,
  payload: {
    request: {
      url: `/courses/school?id=${id}`,
      method: 'GET',
    },
  },
});

export const getComplementaryDetails = (
  student_id,
  course_type_about_id,
  course_type_id,
  course_type_school_id
) => ({
  type: types.DETAILS_COMPLEMENTARY,
  payload: {
    request: {
      url: `/courses/school/details`,
      method: 'GET',
      params: {
        student_id,
        course_type_about_id,
        course_type_id,
        course_type_school_id
      }
    },
  },
});

export const getPeriodsComplementaryType = (
  id
) => ({
  type: types.PERIOD_COMPLEMENTARY_TYPE,
  payload: {
    request: {
      url: `/courses/period/${id}`,
      method: 'GET',
    },
  },
});
