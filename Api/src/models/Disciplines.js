const Model = require('./Model');

class Disciplines extends Model {
  static get tableName() {
    return 'disciplines';
  }
}

module.exports = Disciplines;
