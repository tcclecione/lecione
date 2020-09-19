
exports.up = function (knex, Promise) {
  return knex.schema.createTable('departments', function (table) {
    table.increments('id').primary();
    table.string('name');
    table.string('icon', 400);
    table.timestamps();
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('departments');
};
