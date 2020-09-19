const Model = require('./Model');

class Feedbacks extends Model {
  static get tableName() {
    return 'feedbacks';
  }
}

module.exports = Feedbacks;
