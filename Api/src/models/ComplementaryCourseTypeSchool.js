const Model = require('./Model');

class ComplementaryCourseTypeSchool extends Model {
  static get tableName() {
    return 'complementary_course_type_school';
  }
}

module.exports = ComplementaryCourseTypeSchool;
