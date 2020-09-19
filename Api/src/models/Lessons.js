const Model = require('./Model');

class Lessons extends Model {
  static get tableName() {
    return 'lessons';
  }
}

module.exports = Lessons;
