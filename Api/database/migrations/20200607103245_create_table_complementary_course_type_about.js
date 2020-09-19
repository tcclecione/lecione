
exports.up = function (knex, Promise) {
  return knex.schema.createTable('complementary_course_type_about', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.string('image', 400);
    table.string('description', 400);
    table.string('operation', 400);
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('complementary_course_type_about');
};
