const Model = require('./Model');

class OfficeEmployee extends Model {
  static get tableName() {
    return 'office_employee';
  }
}

module.exports = OfficeEmployee;
