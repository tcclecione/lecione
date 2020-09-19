const Model = require('./Model');

class Departments extends Model {
  static get tableName() {
    return 'departments';
  }
}

module.exports = Departments;
