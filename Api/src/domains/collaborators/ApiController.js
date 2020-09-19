import controller from '../../helpers/compose-controller';
import { Employees, EmployeeSkills, Departments } from '../../models';

class CollaboratorsApiController {
  static async list(req, res) {
    let data = await Departments.query()

    if (!data) {
      return res.status(404).json({
        message: 'Nenhum departamento cadastrado.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async listByOffice(req, res) {
    let data = await Employees.query()
      .select(
        'employees.id',
        'employees.image',
        'employees.name',
        'office_employee.name as office_name',
      )
      .join('office_employee', 'office_employee.id', 'employees.office_id')
      .join('department_office', 'department_office.office_id', 'office_employee.id')
      .where('department_office.department_id', req.query.office_id)
      .where('employees.school_id', req.query.school_id)

    if (!data) {
      return res.status(404).json({
        message: 'Nenhum colaborador cadastrado para este departamento.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async details(req, res) {
    let collaborator = await Employees.query()
      .select(
        'employees.id',
        'employees.name',
        'office_employee.name as office_name',
        'employees.about',
        'employees.email',
        'employees.phone',
        'employees.image',
      )
      .first()
      .join('office_employee', 'office_employee.id', 'employees.office_id')
      .where('employees.id', req.params.id)

    if (!collaborator) {
      return res.status(404).json({
        message: "Nenhum colaborador encontrado"
      })
    }

    let skills = await EmployeeSkills.query()
      .where('employee_id', req.params.id)

    collaborator = { ...collaborator, skills }

    return res.status(200).responseComposer(collaborator)
  }

}

export default controller(CollaboratorsApiController);
