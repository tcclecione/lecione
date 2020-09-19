import controller from '../../helpers/compose-controller';
import { Schools, ContactSchool, PeriodSchool } from '../../models';

class SchoolsApiController {
  static async list(req, res) {
    let data = await Schools.query()
      .select('*', 'schools.id as id', 'address.id as address_id')
      .innerJoin('address', 'schools.id', 'address.school_id')

    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma escola cadastrada.',
      });
    }

    return res.status(200).responseComposer(data);
  }

  static async periodSchool(req, res) {
    let data = await PeriodSchool.query()
      .select('period_school.period')
      .where('school_id', req.params.id)

    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma periodo cadastrado para esta escola.',
      });
    }

    return res.status(200).responseComposer(data);
  }


  static async details(req, res) {
    let data = await Schools.query()
      .select('*', 'schools.id as id', 'address.id as address_id')
      .innerJoin('address', 'schools.id', 'address.school_id')
      .where('schools.id', req.params.id)
    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma escola encontrada.',
      });
    }

    return res.status(200).responseComposer(...data);
  }

  static async contact(req, res) {
    let school = await ContactSchool.query()
      .select(
        'contact_school.id as id',
        'schools.image',
        'schools.name',
        'address.street',
        'address.number',
        'address.district',
        'address.complement',
        'address.postal_code',
        'address.city',
        'address.state',
        'contact_school.phone',
        'contact_school.email',
        'contact_school.phone_whatsapp'
      )
      .first()
      .innerJoin('schools', 'schools.id', 'contact_school.school_id')
      .innerJoin('address', 'schools.id', 'address.school_id')
      .where('schools.id', req.params.id)
    if (!school) {
      return res.status(404).json({
        message: 'Nenhuma contato de escola encontrado.',
      });
    }

    return res.status(200).responseComposer(school);
  }
}

export default controller(SchoolsApiController);
