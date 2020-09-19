const Model = require('./Model');

class Monitorings extends Model {
  static get tableName() {
    return 'monitorings';
  }
}

module.exports = Monitorings;
