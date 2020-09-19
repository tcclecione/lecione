const Model = require('./Model');

class Address extends Model {
  static get tableName() {
    return 'address';
  }
}

module.exports = Address;
