const Model = require('./Model');

class PeriodSchool extends Model {
  static get tableName() {
    return 'period_school';
  }
}

module.exports = PeriodSchool;
