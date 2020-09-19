import types from 'students/types';

export function saveStudent(student) {
  return {
    type: types.SET_STUDENT_SAVE,
    student,
  };
}

export const listStudents = cpf => ({
  type: types.LIST_STUDENTS,
  payload: {
    request: {
      url: `students/responsible?cpf=${cpf}`,
      method: 'GET',
    },
  },
});
