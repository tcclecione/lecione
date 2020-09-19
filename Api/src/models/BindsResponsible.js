const Model = require('./Model');

class BindsResponsible extends Model {
  static get tableName() {
    return 'binds_responsible';
  }
}

module.exports = BindsResponsible;
