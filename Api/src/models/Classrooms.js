const Model = require('./Model');

class Classrooms extends Model {
  static get tableName() {
    return 'classrooms';
  }
}

module.exports = Classrooms;
