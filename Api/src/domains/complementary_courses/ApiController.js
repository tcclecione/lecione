import controller from '../../helpers/compose-controller';
import {
  ComplementaryCourseTypeSchool,
  ComplementaryCourses,
  ComplementaryCourseTypeAbout,
  Evaluations,
  PeriodCourseType
} from '../../models';

class ComplementaryCoursesApiController {
  static async listBySchool(req, res) {
    let data = await ComplementaryCourseTypeSchool.query()
      .select('*')
      .distinct('complementary_course_type_school.id as course_type_school_id', 'complementary_course_type.id as id')
      .join('complementary_course_type', 'complementary_course_type.id', 'complementary_course_type_school.course_type_id')
      .where('school_id', req.query.id)

    if (!data || !data.length) {
      return res.status(404).json({
        message: 'Nenhum curso complementar cadastrado para este aluno.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async listByDetails(req, res) {
    let courses = await ComplementaryCourses.query()
      .select(
        'complementary_courses.*',
        'employees.image as employee_image',
        'employees.name as employee_name',
        'office_employee.name as employee_office_name'
      )
      .innerJoin('employees', 'employees.id', 'complementary_courses.employee_id')
      .innerJoin('office_employee', 'office_employee.id', 'employees.office_id')
      .where('student_id', req.query.student_id).andWhere('complementary_course_type_id', req.query.course_type_id)


    let course_about = await ComplementaryCourseTypeAbout.query()
      .select(
        'complementary_course_type_about.*',
        'employees.image as employee_image',
        'employees.name as employee_name',
        'office_employee.name as employee_office_name',
        'complementary_course_type_school.id as course_type_school_id',
        'complementary_course_type_school.course_type_id as course_type_id',
      )
      .first()
      .innerJoin('employees', 'employees.id', 'complementary_course_type_about.employee_id')
      .innerJoin('office_employee', 'office_employee.id', 'employees.office_id')
      .innerJoin('complementary_course_type_school', 'complementary_course_type_school.course_type_about_id', 'complementary_course_type_about.id')
      .where('complementary_course_type_about.id', req.query.course_type_about_id)


    let evaluation = await Evaluations.query()
      .count('rating as rating_count')
      .sum('rating as rating_sum')
      .where('complementary_course_type_school_id', req.query.course_type_school_id)
      .where('complementary_course_type_id', req.query.course_type_id)

    return res.status(200).responseComposer({ courses, course_about, evaluation });
  }


  static async createEvaluation(req, res) {
    let course = await ComplementaryCourseTypeSchool
      .query()
      .where({ id: req.body.course_type_school_id })
      .first();

    if (!course) {
      return res.status(404).json({
        message: 'Nenhum curso complementar encontrado.',
      });
    }

    let data = await Evaluations.query()
      .insert({
        user_id: req.body.user_id,
        rating: req.body.rating,
        comment: req.body.comment,
        complementary_course_type_school_id: req.body.course_type_school_id,
        complementary_course_type_id: req.body.course_type_id,
      });

    return res.status(200).responseComposer({ message: "Avaliação enviada com sucesso", data });
  }

  static async periodCourseType(req, res) {
    let data = await PeriodCourseType.query()
      .select(
        'period_complementary_course_type.period',
      )
      .where('course_type_school_id', req.params.id)

    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma periodo cadastrado para este curso complementar.',
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
      .where('complementary_course_type_school_id', req.query.type_school_id)
      .where('complementary_course_type_id', req.query.type_id)

    let resume = await Evaluations.query()
      .count('rating as rating_count')
      .sum('rating as rating_sum')
      .where('complementary_course_type_school_id', req.query.type_school_id)
      .where('complementary_course_type_id', req.query.type_id)

    return res.status(200).responseComposer({ evaluations, resume });
  }
}

export default controller(ComplementaryCoursesApiController);
