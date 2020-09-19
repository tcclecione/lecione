const Model = require('./Model');

class PeriodMonitoringType extends Model {
  static get tableName() {
    return 'period_monitoring_type';
  }
}

module.exports = PeriodMonitoringType;
