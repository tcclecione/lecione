
exports.up = function (knex, Promise) {
  return knex.schema.createTable('lessons', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.integer('classroom_id').unsigned();
    table.integer('discipline_id').unsigned();
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
    table.foreign("classroom_id").references("id").inTable("classrooms");
    table.foreign("discipline_id").references("id").inTable("disciplines");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('lessons');
};
