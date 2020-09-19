const Model = require('./Model');

class Timeline extends Model {
  static get tableName() {
    return 'timeline';
  }
}

module.exports = Timeline;
