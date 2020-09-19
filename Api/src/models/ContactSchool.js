const Model = require('./Model');

class ContactSchool extends Model {
  static get tableName() {
    return 'contact_school';
  }
}

module.exports = ContactSchool;
