const Model = require('./Model');

class ComplementaryCourses extends Model {
  static get tableName() {
    return 'complementary_courses';
  }
}

module.exports = ComplementaryCourses;
