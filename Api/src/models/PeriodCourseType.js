const Model = require('./Model');

class PeriodCourseType extends Model {
  static get tableName() {
    return 'period_complementary_course_type';
  }
}

module.exports = PeriodCourseType;
