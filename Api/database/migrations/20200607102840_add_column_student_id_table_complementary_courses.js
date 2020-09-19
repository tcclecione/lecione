
exports.up = function (knex, Promise) {
  return knex.schema.table('complementary_courses', function (table) {
    table.integer('student_id').unsigned();

    table.foreign("student_id").references("id").inTable("students");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('complementary_courses', function (table) {
    table.dropForeign(['student_id'])
    table.dropColumn('student_id')
  })
};

