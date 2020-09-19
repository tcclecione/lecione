const Model = require('./Model');

class Evaluations extends Model {
  static get tableName() {
    return 'evaluations';
  }
}

module.exports = Evaluations;
