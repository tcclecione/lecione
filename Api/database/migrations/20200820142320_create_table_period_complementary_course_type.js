
exports.up = function (knex, Promise) {
  return knex.schema.createTable('period_complementary_course_type', function (table) {
    table.integer('course_type_school_id').unsigned();
    table.string('period', 32)
    table.timestamps();

    table.foreign("course_type_school_id").references("id").inTable("complementary_course_type_school");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('period_complementary_course_type');
};
