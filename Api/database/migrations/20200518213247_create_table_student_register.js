
exports.up = function (knex, Promise) {
  return knex.schema.createTable('student_register', function (table) {
    table.increments('id').primary();
    table.integer('student_id').unsigned();
    table.integer('classroom_id').unsigned();
    table.timestamps();

    table.foreign("student_id").references("id").inTable("students");
    table.foreign("classroom_id").references("id").inTable("classrooms");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('student_register');
};
