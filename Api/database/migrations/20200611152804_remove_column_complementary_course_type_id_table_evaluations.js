
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['complementary_course_type_id'])
    table.dropColumn('complementary_course_type_id')
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('complementary_course_type_id')
  })
};

