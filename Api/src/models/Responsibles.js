const Model = require('./Model');

class Responsibles extends Model {
  static get tableName() {
    return 'responsibles';
  }
}

module.exports = Responsibles;
