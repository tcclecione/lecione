import controller from '../../helpers/compose-controller';
import Orders from '../../models/Order';

class OrdersApiController {
  static async list(req, res) {
    let data = await Orders.query()

    if (!data) {
      return res.status(404).json({
        message: 'Nenhum estudante cadastrado.',
      });
    }

    return res.status(200).responseComposer({ data });
  }
}

export default controller(OrdersApiController);
