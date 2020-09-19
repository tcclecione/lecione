const Model = require('./Model');

class Students extends Model {
  static get tableName() {
    return 'students';
  }
}

module.exports = Students;
