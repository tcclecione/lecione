
exports.up = function (knex, Promise) {
  return knex.schema.table('complementary_courses', function (table) {
    table.integer('complementary_course_type_id').unsigned();

    table.foreign("complementary_course_type_id").references("id").inTable("complementary_course_type");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('complementary_courses', function (table) {
    table.dropForeign(['complementary_course_type_id'])
    table.dropColumn('complementary_course_type_id')
  })
};

