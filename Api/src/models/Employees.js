const Model = require('./Model');

class Employees extends Model {
  static get tableName() {
    return 'employees';
  }
}

module.exports = Employees;
