
exports.up = function (knex, Promise) {
  return knex.schema.createTable('timeline', function (table) {
    table.increments('id').primary();
    table.integer('employee_id').unsigned();
    table.integer('school_id').unsigned();
    table.integer('classroom_id').unsigned();
    table.string('post');
    table.timestamps();

    table.foreign("employee_id").references("id").inTable("employees");
    table.foreign("school_id").references("id").inTable("schools");
    table.foreign("classroom_id").references("id").inTable("classrooms");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('timeline');
};
