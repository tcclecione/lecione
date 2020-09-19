const Model = require('./Model');

class Schools extends Model {
  static get tableName() {
    return 'schools';
  }
}

module.exports = Schools;
