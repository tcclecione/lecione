const Model = require('./Model');

class EmployeeSkills extends Model {
  static get tableName() {
    return 'employee_skills';
  }
}

module.exports = EmployeeSkills;
