
exports.up = function (knex, Promise) {
  return knex.schema.createTable('employees', function (table) {
    table.increments('id').primary();
    table.integer('school_id').unsigned();
    table.integer('office_id').unsigned();
    table.string('name');
    table.string('cpf', 16);
    table.string('sex', 1);
    table.date('date_birth');
    table.string('about');
    table.string('phone', 16);
    table.string('email');
    table.string('marital_status');
    table.timestamps();

    table.foreign("school_id").references("id").inTable("schools");
    table.foreign("office_id").references("id").inTable("office_employee");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('employees');
};
