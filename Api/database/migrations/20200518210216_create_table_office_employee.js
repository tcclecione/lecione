
exports.up = function (knex, Promise) {
  return knex.schema.createTable('office_employee', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.timestamps();

  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('office_employee');
};
