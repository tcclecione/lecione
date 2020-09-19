
exports.up = function (knex, Promise) {
  return knex.schema.createTable('employee_skills', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.string('name');
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('employee_skills');
};
