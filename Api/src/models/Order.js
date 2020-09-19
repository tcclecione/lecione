const Model = require('./Model');

class Order extends Model {
  static get tableName() {
    return 'order';
  }
}

module.exports = Order;
