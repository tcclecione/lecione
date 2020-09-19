
exports.up = function (knex, Promise) {
  return knex.schema.createTable('responsibles', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('cpf');
    table.string('sex', 1);
    table.string('email');
    table.string('phone', 16);
    table.string('occupation');
    table.string('marital_status');
    table.date('date_birth');
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('responsibles');
};
