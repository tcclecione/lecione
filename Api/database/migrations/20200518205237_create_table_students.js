
exports.up = function (knex, Promise) {
  return knex.schema.createTable('students', function (table) {
    table.increments('id').primary();
    table.integer('school_id').unsigned();
    table.string('code_register');
    table.string('sex', 1);
    table.string('name');
    table.string('cpf', 16);
    table.string('email');
    table.string('phone', 16);
    table.date('date_birth');

    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('students');
};
