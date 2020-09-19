import controller from '../../helpers/compose-controller';
import { Responsibles, Students } from '../../models';

class StudentsApiController {
  static async list(req, res) {
    let data = await Responsibles.query()

    if (!data) {
      return res.status(404).json({
        message: 'Nenhum estudante cadastrado.',
      });
    }

    return res.status(200).responseComposer({ data });
  }

  static async listByReponponsible(req, res) {
    let responsible = await Responsibles.query()
      .first()
      .where('cpf', req.query.cpf)

    if (!responsible) {
      return res.status(404).json({
        message: 'Nenhum estudante cadastrado para este responsável.',
      });
    }

    let info = await Students.query()
      .select(
        'students.id as id',
        'students.created_at as student_created_at',
        'students.updated_at as student_updated_at',
        'students.email',
        'students.phone',
        'students.school_id',
        'students.code_register',
        'students.sex',
        'students.name',
        'students.cpf',
        'students.date_birth',
        'students.image',
        'binds_responsible.id as bind_id',
        'binds_responsible.responsible_id as bind_responsible_id',
        'binds_responsible.created_at as bind_created_at',
        'binds_responsible.updated_at as bind_updated_at',
        'classrooms.id as classroom_id',
        'classrooms.grade as grade',
        'classrooms.grade_type as grade_type',
        'schools.name as school_name'
      )
      .innerJoin('binds_responsible', 'students.id', 'binds_responsible.student_id')
      .innerJoin('student_register', 'students.id', 'student_register.student_id')
      .innerJoin('classrooms', 'student_register.classroom_id', 'classrooms.id')
      .innerJoin('schools', 'students.school_id', 'schools.id')
      .where('binds_responsible.responsible_id', responsible.id)

    if (!info.length) {
      let info = await Students.query()
        .select(
          'students.id as id',
          'students.created_at as student_created_at',
          'students.updated_at as student_updated_at',
          'students.email',
          'students.phone',
          'students.school_id',
          'students.code_register',
          'students.sex',
          'students.name',
          'students.cpf',
          'students.date_birth',
          'students.image',
          'binds_responsible.id as bind_id',
          'binds_responsible.responsible_id as bind_responsible_id',
          'binds_responsible.created_at as bind_created_at',
          'binds_responsible.updated_at as bind_updated_at',
          'classrooms.id as classroom_id',
          'classrooms.grade as grade',
          'classrooms.grade_type as grade_type',
          'schools.name as school_name'
        )
        .innerJoin('binds_responsible', 'students.id', 'binds_responsible.student_id')
        .innerJoin('student_register', 'students.id', 'student_register.student_id')
        .innerJoin('classrooms', 'student_register.classroom_id', 'classrooms.id')
        .innerJoin('schools', 'students.school_id', 'schools.id')
        .where('binds_responsible.responsible_id', 1)

      let data = {
        info,
        user: true
      }
      return res.status(200).responseComposer(data);
    }

    let data = {
      info,
      user: false
    }

    return res.status(200).responseComposer(data);
  }
}

export default controller(StudentsApiController);
