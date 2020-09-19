const Model = require('./Model');

class MonitoringTypeAbout extends Model {
  static get tableName() {
    return 'monitoring_type_about';
  }
}

module.exports = MonitoringTypeAbout;
