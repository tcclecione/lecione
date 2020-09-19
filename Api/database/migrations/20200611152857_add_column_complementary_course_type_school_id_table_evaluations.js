
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('complementary_course_type_school_id').unsigned();

    table.foreign("complementary_course_type_school_id").references("id").inTable("complementary_course_type_school");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['complementary_course_type_school_id'])
    table.dropColumn('complementary_course_type_school_id')
  })
};

