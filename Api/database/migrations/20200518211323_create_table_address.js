
exports.up = function (knex, Promise) {
  return knex.schema.createTable('address', function (table) {
    table.increments('id').primary();
    table.integer('responsible_id').unsigned();
    table.integer('student_id').unsigned();
    table.integer('school_id').unsigned();
    table.integer('employee_id').unsigned();
    table.string('street');
    table.string('number');
    table.string('district');
    table.string('complement');
    table.string('postal_code');
    table.string('city');
    table.string('state', 2);
    table.timestamps();

    table.foreign("responsible_id").references("id").inTable("responsibles");
    table.foreign("student_id").references("id").inTable("students");
    table.foreign("school_id").references("id").inTable("schools");
    table.foreign("employee_id").references("id").inTable("employees");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('address');
};
