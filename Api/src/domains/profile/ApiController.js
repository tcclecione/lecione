import controller from '../../helpers/compose-controller';
import { Responsibles, Students } from '../../models';

class ProfileApiController {

  static async details(req, res) {
    let responsible = await Responsibles.query()
      .select(
        'responsibles.id',
        'responsibles.name',
        'responsibles.cpf',
        'responsibles.email',
        'responsibles.phone',
        'responsibles.occupation',
        'responsibles.image',
        // 'address.street',
        // 'address.district',
        // 'address.number',
      )
      // .join('address', 'address.responsible_id', 'responsibles.id')
      .first()
      .where('cpf', req.query.responsible_cpf)

    if (!responsible) {
      return res.status(404).json({
        message: 'Nenhum responsável cadastrado para este estudante.',
      });
    }
    let student = await Students.query()
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
        'schools.name as school_name',
        'classrooms.grade as grade',
        'classrooms.grade_type as grade_type',
      )
      .innerJoin('schools', 'students.school_id', 'schools.id')
      .innerJoin('student_register', 'student_register.student_id', parseInt(req.query.student_id))
      .innerJoin('classrooms', 'student_register.classroom_id', 'classrooms.id')
      .first()
      .where('students.id', req.query.student_id)

    return res.status(200).responseComposer({ responsible, student });
  }
}

export default controller(ProfileApiController);
