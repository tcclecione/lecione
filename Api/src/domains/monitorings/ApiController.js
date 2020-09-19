import controller from '../../helpers/compose-controller';
import { MonitoringTypeSchool, Monitorings, MonitoringTypeAbout, Evaluations, PeriodMonitoringType } from '../../models';

class MonitoringsApiController {
  static async listBySchool(req, res) {
    let data = await MonitoringTypeSchool.query()
      .select('*')
      .distinct('monitoring_type_school.id as monitoring_type_school_id', 'monitoring_type.id as id')
      .join('monitoring_type', 'monitoring_type.id', 'monitoring_type_school.monitoring_type_id')
      .where('school_id', req.query.id)

    if (!data || !data.length) {
      return res.status(404).json({
        message: 'Nenhum acompanhamento cadastrado para este aluno.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async listByDetails(req, res) {
    let monitorings = await Monitorings.query()
      .select(
        'monitorings.*',
        'employees.image as employee_image',
        'employees.name as employee_name',
        'office_employee.name as employee_office_name'
      )
      .innerJoin('employees', 'employees.id', 'monitorings.employee_id')
      .innerJoin('office_employee', 'office_employee.id', 'employees.office_id')
      .where('student_id', req.query.student_id).andWhere('monitoring_type_id', req.query.monitoring_type_id)

    let monitoring_about = await MonitoringTypeAbout.query()
      .select(
        'monitoring_type_about.*',
        'employees.image as employee_image',
        'employees.name as employee_name',
        'office_employee.name as employee_office_name',
        'monitoring_type_school.id as monitoring_type_school_id',
        'monitoring_type_school.monitoring_type_id as monitoring_type_id',
      )
      .first()
      .innerJoin('employees', 'employees.id', 'monitoring_type_about.employee_id')
      .innerJoin('office_employee', 'office_employee.id', 'employees.office_id')
      .innerJoin('monitoring_type_school', 'monitoring_type_school.monitoring_type_about_id', 'monitoring_type_about.id')
      .where('monitoring_type_about.id', req.query.monitoring_type_about_id)


    let evaluation = await Evaluations.query()
      .count('rating as rating_count')
      .sum('rating as rating_sum')
      .where('monitoring_type_school_id', req.query.monitoring_type_school_id)
      .where('monitoring_type_id', req.query.monitoring_type_id)

    return res.status(200).responseComposer({ monitorings, monitoring_about, evaluation });
  }

  static async createEvaluation(req, res) {
    let monitoring = await MonitoringTypeSchool
      .query()
      .where({ id: req.body.monitoring_type_school_id })
      .first();

    if (!monitoring) {
      return res.status(404).json({
        message: 'Nenhum acompanhamento encontrado.',
      });
    }

    let data = await Evaluations.query()
      .insert({
        user_id: req.body.user_id,
        rating: req.body.rating,
        comment: req.body.comment,
        monitoring_type_school_id: req.body.monitoring_type_school_id,
        monitoring_type_id: req.body.monitoring_type_id,
      });

    return res.status(200).responseComposer({ message: "Avaliação enviada com sucesso", data });
  }

  static async periodMonitoringType(req, res) {
    let data = await PeriodMonitoringType.query()
      .select(
        'period_monitoring_type.period',
      )
      .where('monitoring_type_school_id', req.params.id)

    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma periodo cadastrado para este acompanhamento.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async listEvaluation(req, res) {
    let evaluations = await Evaluations.query()
      .select(
        'evaluations.*',
        'responsibles.image as responsible_image',
        'responsibles.name as responsible_name',
        'responsibles.occupation as responsible_occupation',
      )
      .innerJoin('users', 'users.id', 'evaluations.user_id')
      .innerJoin('responsibles', 'users.cpf', 'responsibles.cpf')
      .where('monitoring_type_school_id', req.query.type_school_id)
      .where('monitoring_type_id', req.query.type_id)

    let resume = await Evaluations.query()
      .count('rating as rating_count')
      .sum('rating as rating_sum')
      .where('monitoring_type_school_id', req.query.type_school_id)
      .where('monitoring_type_id', req.query.type_id)

    return res.status(200).responseComposer({ evaluations, resume });
  }
}

export default controller(MonitoringsApiController);
