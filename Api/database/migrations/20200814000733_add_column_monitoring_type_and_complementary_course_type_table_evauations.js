
exports.up = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.integer('monitoring_type_id').unsigned();
    table.integer('complementary_course_type_id').unsigned();

    table.foreign("monitoring_type_id").references("id").inTable("monitoring_type");
    table.foreign("complementary_course_type_id").references("id").inTable("complementary_course_type");
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.table('evaluations', function (table) {
    table.dropForeign(['monitoring_type_id'])
    table.dropColumn('complementary_course_type_id')
  })
};

