
exports.up = function (knex, Promise) {
  return knex.schema.createTable('complementary_course_type', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.integer('feature_id').unsigned();
    table.string('name');
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
    table.foreign("feature_id").references("id").inTable("features");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('complementary_course_type');
};
