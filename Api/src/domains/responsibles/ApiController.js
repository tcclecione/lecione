import controller from '../../helpers/compose-controller';
import Responsibles from '../../models/Responsibles';

class ResponsiblesApiController {
  static async details(req, res) {
    let data = await Responsibles.query()
      .select('*')
      .first()
      .where('cpf', req.query.cpf)
    if (!data) {
      return res.status(404).json({
        message: 'Nenhuma responsável encontrado.',
      });
    }

    return res.status(200).responseComposer(data);
  }
}

export default controller(ResponsiblesApiController);
