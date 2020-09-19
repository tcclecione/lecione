const Model = require('./Model');

class StudentRegister extends Model {
  static get tableName() {
    return 'student_register';
  }
}

module.exports = StudentRegister;
