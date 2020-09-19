
exports.up = function (knex, Promise) {
  return knex.schema.createTable('monitoring_type_about', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.integer('monitoring_type_school_id').unsigned();
    table.string('image', 400);
    table.string('description', 400);
    table.string('operation', 400);
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
    table.foreign("monitoring_type_school_id").references("id").inTable("monitoring_type_school");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('monitoring_type_about');
};
