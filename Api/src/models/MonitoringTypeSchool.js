const Model = require('./Model');

class MonitoringTypeSchool extends Model {
  static get tableName() {
    return 'monitoring_type_school';
  }
}

module.exports = MonitoringTypeSchool;
