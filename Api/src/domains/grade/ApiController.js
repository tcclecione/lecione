import controller from '../../helpers/compose-controller';
import { Lessons } from '../../models';

class GradeApiController {
  static async listByClassroom(req, res) {
    let data = await Lessons.query()
      .select(
        'lessons.id',
        'disciplines.name as discipline_name',
        'lessons.description',
        'employees.id as employee_id',
        'employees.name as employee_name',
        'employees.image as employee_image',
        'office_employee.name as employee_office'
      )
      .join('employees', 'employees.id', 'lessons.employee_id')
      .join('office_employee', 'office_employee.id', 'employees.office_id')
      .join('disciplines', 'disciplines.id', 'lessons.discipline_id')
      .where('lessons.classroom_id', req.params.id)

    if (!data || !data.length) {
      return res.status(404).json({
        message: 'Nenhum disciplina cadastrada para esta classe.',
      });
    }

    return res.status(200).responseComposer(data);
  }
}

export default controller(GradeApiController);
